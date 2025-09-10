import { getPlaiceholder } from "plaiceholder";

export async function getBlurDataUrl(imageUrl: string | undefined) {
  if (!imageUrl) return;
  try {
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));
    return base64;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Error generating base64");
    }
  }
}
