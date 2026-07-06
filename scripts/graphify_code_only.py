from __future__ import annotations

import json
import re
import sys
from pathlib import Path

from graphify.analyze import god_nodes, suggest_questions, surprising_connections
from graphify.build import build
from graphify.cluster import cluster, label_communities_by_hub, score_all
from graphify.detect import CODE_EXTENSIONS
from graphify.export import to_html, to_json
from graphify.extract import extract
from graphify.report import generate


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "graphify-out"
SKIP_DIRS = {
    ".codex",
    ".git",
    ".next",
    ".vercel",
    "build",
    "coverage",
    "graphify-out",
    "node_modules",
    "out",
}


def is_skipped(path: Path) -> bool:
    rel_parts = path.relative_to(ROOT).parts
    return any(part in SKIP_DIRS for part in rel_parts)


def code_files() -> list[Path]:
    files = [
        path
        for path in ROOT.rglob("*")
        if path.is_file()
        and path.suffix.lower() in CODE_EXTENSIONS
        and not is_skipped(path)
    ]
    return sorted(files, key=lambda path: path.as_posix().lower())


def word_count(paths: list[Path]) -> int:
    total = 0
    for path in paths:
        try:
            total += len(re.findall(r"\w+", path.read_text(encoding="utf-8", errors="ignore")))
        except OSError:
            continue
    return total


def main() -> int:
    files = code_files()
    if not files:
        print("No supported code/config files found for Graphify.", file=sys.stderr)
        return 1

    OUT.mkdir(exist_ok=True)
    (OUT / ".graphify_python").write_text(sys.executable, encoding="utf-8")
    (OUT / ".graphify_root").write_text(str(ROOT), encoding="utf-8")

    extraction = extract(files, cache_root=ROOT)
    extraction.setdefault("hyperedges", [])
    graph = build([extraction], dedup=True, root=ROOT)
    if graph.number_of_nodes() == 0:
        print("Graphify extraction produced no graph nodes.", file=sys.stderr)
        return 1

    communities = cluster(graph)
    cohesion = score_all(graph, communities)
    labels = label_communities_by_hub(graph, communities)
    gods = god_nodes(graph)
    surprises = surprising_connections(graph, communities)
    questions = suggest_questions(graph, communities, labels)

    detection = {
        "total_files": len(files),
        "total_words": word_count(files),
        "files": {"code": [str(path.relative_to(ROOT).as_posix()) for path in files]},
        "warning": "",
    }
    tokens = {
        "input": extraction.get("input_tokens", 0),
        "output": extraction.get("output_tokens", 0),
    }
    analysis = {
        "communities": {str(key): value for key, value in communities.items()},
        "cohesion": {str(key): value for key, value in cohesion.items()},
        "labels": {str(key): value for key, value in labels.items()},
        "gods": gods,
        "surprises": surprises,
        "tokens": tokens,
    }

    to_json(graph, communities, str(OUT / "graph.json"), force=True, community_labels=labels)
    (OUT / "GRAPH_REPORT.md").write_text(
        generate(
            graph,
            communities,
            cohesion,
            labels,
            gods,
            surprises,
            detection,
            tokens,
            str(ROOT.name),
            suggested_questions=questions,
        ),
        encoding="utf-8",
    )
    (OUT / ".graphify_analysis.json").write_text(
        json.dumps(analysis, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    (OUT / ".graphify_labels.json").write_text(
        json.dumps({str(key): value for key, value in labels.items()}, indent=2),
        encoding="utf-8",
    )
    to_html(graph, communities, str(OUT / "graph.html"), community_labels=labels)

    print(
        f"Graphify code graph built: {len(files)} files, "
        f"{graph.number_of_nodes()} nodes, {graph.number_of_edges()} edges, "
        f"{len(communities)} communities."
    )
    print("Outputs: graphify-out/graph.json, GRAPH_REPORT.md, graph.html")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
