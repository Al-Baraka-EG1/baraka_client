'use client';

import { useState } from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { CloudinaryAsset, getCloudinaryAssets } from '@/app/actions/cloudinary';
import { Loader2, Upload, RefreshCw, Image as ImageIcon, Video } from 'lucide-react';

export default function CloudinaryTestPage() {
  const [assets, setAssets] = useState<CloudinaryAsset[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans flex items-center justify-center relative overflow-hidden">
        {/* Sleek background gradient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl relative z-10 space-y-6 shadow-2xl">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-16 h-16 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/5 animate-pulse">
              <Upload className="w-8 h-8 rotate-180" />
            </div>
            
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Configuration Needed
            </h1>
            
            <p className="text-neutral-400 text-sm leading-relaxed">
              This page requires Cloudinary integration. To view the optimized media library, please configure the required environment variable.
            </p>
          </div>

          <div className="bg-black/40 border border-white/5 rounded-2xl p-4 font-mono text-xs text-neutral-300 select-all overflow-x-auto">
            <p className="text-neutral-500 mb-1"># Add this to your environment variables</p>
            <p className="text-blue-400">NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME<span className="text-white">=</span><span className="text-green-400">&quot;your_cloud_name&quot;</span></p>
          </div>

          <div className="text-center">
            <p className="text-xs text-neutral-500">
              Once configured, restart the dev server or re-deploy to activate the page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const fetchAssets = async () => {
    setLoading(true);
    const result = await getCloudinaryAssets();
    if (result.success) {
      setAssets(result.assets);
      setError(null);
    } else {
      setError(result.error || 'Failed to load assets');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Cloudinary Integration
            </h1>
            <p className="text-neutral-400 mt-2 text-lg">
              Manage and view your optimized assets.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={fetchAssets}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>

            <CldUploadWidget
              uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || 'ml_default'}
              onSuccess={() => fetchAssets()}
            >
              {({ open }) => (
                <button
                  onClick={() => open()}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/20"
                >
                  <Upload className="w-4 h-4" />
                  Upload Asset
                </button>
              )}
            </CldUploadWidget>
          </div>
        </div>

        {/* Example Section */}
        <section className="bg-white/5 rounded-3xl p-8 border border-white/10 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-500 rounded-full inline-block"></span>
            next-cloudinary Demo (CldImage)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-neutral-300 leading-relaxed">
                Using <code>&lt;CldImage /&gt;</code> automatically handles optimization, 
                delivery, and responsive resizing. Below is a sample image delivered 
                through your Cloudinary account.
              </p>
              <div className="bg-black/50 p-4 rounded-xl border border-white/5 font-mono text-sm overflow-hidden">
                <code className="text-purple-300">
                  {`<CldImage\n  width="600"\n  height="400"\n  src="cld-sample-5"\n  sizes="100vw"\n  alt="Sample Image"\n/>`}
                </code>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <CldImage
                width="600"
                height="400"
                src="cld-sample-5" // Default Cloudinary sample
                sizes="100vw"
                alt="Description of my image"
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-sm font-medium">Optimized by Cloudinary</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold">Your Assets Library</h2>
            <span className="px-2 py-0.5 bg-white/10 rounded-full text-xs font-mono text-neutral-400">
              {assets.length} items
            </span>
          </div>

          {loading && assets.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center gap-4 border border-dashed border-white/10 rounded-3xl">
              <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              <p className="text-neutral-500">Fetching your assets from the cloud...</p>
            </div>
          ) : error ? (
            <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-center">
              {error}
              <p className="text-sm mt-2 opacity-70">
                Check your Cloudinary credentials and Search API permissions.
              </p>
            </div>
          ) : assets.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center gap-4 border border-dashed border-white/10 rounded-3xl text-center p-8">
              <ImageIcon className="w-12 h-12 text-neutral-700" />
              <p className="text-neutral-500 max-w-sm">
                No assets found in your account yet. Try uploading one using the button above!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {assets.map((asset) => (
                <div 
                  key={asset.public_id} 
                  className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-white/5 aspect-square transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5"
                >
                  {asset.resource_type === 'image' ? (
                    <CldImage
                      width="300"
                      height="300"
                      src={asset.public_id}
                      alt={asset.public_id}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                      <Video className="w-8 h-8 text-neutral-600" />
                    </div>
                  )}
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
                    <p className="text-xs font-mono truncate text-neutral-300">{asset.public_id}</p>
                    <p className="text-[10px] text-neutral-500 mt-1 uppercase tracking-wider">
                      {asset.format} / {((asset.bytes || 0) / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
