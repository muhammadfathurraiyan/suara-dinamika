import readArticleBySlugAction from "@/actions/global/readArticleBySlugAction";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("id");
    const id = hasTitle
      ? searchParams.get("id")?.slice(0, 100)
      : "Default title";

    const { data } = await readArticleBySlugAction(id!);
    return new ImageResponse(
      (
        <div
          style={{
            backgroundSize: "100% 100%",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <img src={data?.[0].image} />
        </div>
      ),
      {
        width: 1200,
        height: 628,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
