// Media records store Supabase Storage URLs and SEO alt text, never raw file blobs.
export type MediaFile = {
  id: string;
  url: string;
  altText: string;
  fileName: string;
  mimeType: string;
  size: number;
  createdAt: string;
};
