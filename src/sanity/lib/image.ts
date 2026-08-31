import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityClient } from "./client";

type SanityImage = { asset?: { _ref: string } };

const builder = createImageUrlBuilder(sanityClient);

export function urlForImage(source?: SanityImage | null) {
  if (!source?.asset?._ref) return undefined;
  return builder.image(source).auto("format").fit("max");
}
