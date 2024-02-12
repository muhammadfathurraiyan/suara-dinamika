import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function OpenGraphImage(base64: string | undefined) {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <img src={base64} />
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
