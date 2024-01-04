import Image from "next/image";
import Link from "next/link";

export default function ListCategory({
  data,
}: {
  data:
    | {
        body: string;
        category_id: string;
        created_at: string;
        created_by: string;
        id: string;
        image: string;
        slug: string;
        status: boolean;
        title: string;
        view: number | null;
        category: {
          category: string;
          created_at: string;
          id: string;
        } | null;
      }[]
    | undefined;
}) {
  if (data?.length! !== 0) {
    return (
      <div className="md:col-span-2 flex flex-col gap-2 mb-80">
        {data?.map((data) => (
          <Link
            href={`/${data.category?.category}/${data.slug}`}
            key={data.id}
            className="flex flex-col items-start gap-2"
          >
            <div className="grid md:grid-cols-2 border border-neutral-900/30 max-md:grid-rows-2 w-full h-48 max-md:h-96 gap-2">
              <div className=" group overflow-hidden">
                <Image
                  className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
                  src={data.image!}
                  alt=""
                  width={1}
                  height={1}
                />
              </div>
              <div className="flex flex-col p-2 justify-between items-start">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="font-medium md:text-lg">{data.title}</h2>
                  <p className="text-xs">&#8226; 10 menit yang lalu</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                    {data.category?.category}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <button className="p-2 bg-neutral-900 text-neutral-100 w-fit hover:bg-neutral-900/90 duration-300">
          LAINYA
        </button>
      </div>
    );
  } else {
    <div className="flex items-center justify-center"></div>;
  }
}
