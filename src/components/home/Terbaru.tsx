import Image from "next/image";
import Link from "next/link";

export default function Terbaru({
  data,
}: {
  data:
    | {
        id: string;
        slug: string;
        title: string;
        image: string;
        category: {
          category: string;
        } | null;
      }[]
    | null;
}) {
  return (
    <main className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
      <div>
        <h1 className="font-semibold text-xl p-2 bg-neutral-900 text-neutral-100 w-fit">
          ARTIKEL TERBARU
        </h1>
        <div className="h-1 w-full bg-neutral-900" />
      </div>
      <div className="grid grid-rows-3 max-md:grid-rows-2 gap-1 max-md:gap-2">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 md:row-span-2">
          <Link
            href={`/${data?.[5].category?.category}/${data?.[5].slug}`}
            className="group relative h-96 max-md:h-48 overflow-hidden"
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data?.[5].image!}
              alt={data?.[5].title!}
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 p-2 w-full pt-8 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="md:text-2xl font-medium text-neutral-100">
                {data?.[5].title}
              </h2>
              <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                {data?.[5].category?.category}
              </p>
            </div>
          </Link>
          <div className="grid grid-rows-2 max-md:hidden gap-2 h-96">
            <Link
              href={`/${data?.[4].category?.category}/${data?.[4].slug}`}
              className="group overflow-hidden relative"
            >
              <Image
                className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
                src={data?.[4].image!}
                alt={data?.[4].title!}
                width={1}
                height={1}
              />
              <div className="absolute bottom-0 left-0 p-2 w-full pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
                <h2 className="font-medium text-neutral-100">
                  {data?.[4].title}
                </h2>
                <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                  {data?.[4].category?.category}
                </p>
              </div>
            </Link>
            <Link
              href={`/${data?.[3].category?.category}/${data?.[3].slug}`}
              className="group overflow-hidden relative"
            >
              <Image
                className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
                src={data?.[3].image!}
                alt={data?.[3].title!}
                width={1}
                height={1}
              />
              <div className="absolute bottom-0 left-0 p-2 w-full pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
                <h2 className="font-medium text-neutral-100">
                  {data?.[3].title}
                </h2>
                <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                  {data?.[3].category?.category}
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-2 gap-2">
          <Link
            href={`/${data?.[3].category?.category}/${data?.[3].slug}`}
            className="group h-48 relative overflow-hidden"
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data?.[2].image!}
              alt={data?.[2].title!}
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 p-2 w-full pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium max-md:text-xs text-neutral-100">
                {data?.[2].title}
              </h2>
              <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                {data?.[2].category?.category}
              </p>
            </div>
          </Link>
          <Link
            href={`/${data?.[1].category?.category}/${data?.[1].slug}`}
            className="group h-48 relative overflow-hidden"
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data?.[1].image!}
              alt={data?.[1].title!}
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 p-2 w-full pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium max-md:text-xs text-neutral-100">
                {data?.[1].title}
              </h2>
              <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                {data?.[1].category?.category}
              </p>
            </div>
          </Link>
          <Link
            href={`/${data?.[0].category?.category}/${data?.[0].slug}`}
            className="group h-48 relative overflow-hidden"
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data?.[0].image!}
              alt={data?.[0].title!}
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 p-2 w-full pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium max-md:text-xs text-neutral-100">
                {data?.[0].title}
              </h2>
              <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                {data?.[0].category?.category}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
