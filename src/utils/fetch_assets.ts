import { CloudinaryAsset, getCloudinaryAssets } from '../app/actions/cloudinary';

async function main() {
  const result = await getCloudinaryAssets(50);
  if (result.success) {
    console.log(JSON.stringify(result.assets.map((asset: CloudinaryAsset) => asset.public_id), null, 2));
  } else {
    console.error(result.error);
  }
}

main();
