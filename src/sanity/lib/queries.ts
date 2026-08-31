import { sanityClient } from "./client";

type SanityImage = { asset?: { _ref: string } };

export type SiteImages = {
  heroImage?: SanityImage;
  serviceSprayingImage?: SanityImage;
  serviceSpreadingImage?: SanityImage;
  serviceVegetationImage?: SanityImage;
  trustImage?: SanityImage;
};

const SITE_IMAGES_QUERY = `*[_type == "siteImages"][0]{
  heroImage,
  serviceSprayingImage,
  serviceSpreadingImage,
  serviceVegetationImage,
  trustImage
}`;

export async function getSiteImages(): Promise<SiteImages> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return {};
  try {
    return (await sanityClient.fetch(SITE_IMAGES_QUERY)) ?? {};
  } catch {
    return {};
  }
}
