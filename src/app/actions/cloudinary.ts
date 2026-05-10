'use server';

import cloudinary from '@/lib/cloudinary';

export type CloudinaryAsset = {
  public_id: string;
  resource_type: 'image' | 'video' | string;
  format?: string;
  bytes?: number;
  secure_url?: string;
  width?: number;
  height?: number;
};

export type CloudinaryAssetsResult =
  | {
      success: true;
      assets: CloudinaryAsset[];
      total_count?: number;
    }
  | {
      success: false;
      error: string;
    };

export async function getCloudinaryAssets(maxResults = 50): Promise<CloudinaryAssetsResult> {
  try {
    const results = await cloudinary.search
      .expression('resource_type:image OR resource_type:video') // Get both images and videos
      .sort_by('created_at', 'desc')
      .max_results(maxResults)
      .execute();

    return {
      success: true,
      assets: (results.resources || []) as CloudinaryAsset[],
      total_count: results.total_count,
    };
  } catch (error) {
    console.error('Error fetching Cloudinary assets:', error);
    return {
      success: false,
      error: 'Failed to fetch assets. Make sure your API Key and Secret have Search API access.',
    };
  }
}
