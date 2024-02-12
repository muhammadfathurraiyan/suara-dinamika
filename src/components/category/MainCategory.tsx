import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function MainCategory({
  data,
}: {
  data:
    | {
        id: string;
        image: string;
        slug: string;
        title: string;
        category: {
          category: string;
        } | null;
      }[]
    | undefined;
}) {
  if (data?.length === 3) {
    return (
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 md:row-span-2">
        <Link
          key={data![2].id}
          href={`/${data![2].category?.category}/${data![2].slug}`}
          className="group relative h-96 max-md:h-48 overflow-hidden"
        >
          <Image
            className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
            src={data![2].image}
            alt=""
            width={1}
            height={1}
          />
          <div className="absolute bottom-0 left-0 w-full p-2 pt-8 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
            <h2 className="md:text-2xl font-medium text-neutral-100">
              {data![2].title}
            </h2>
            <p className="p-2 bg-neutral-900 uppercase text-neutral-100 w-fit text-xs">
              {data![2].category?.category}
            </p>
          </div>
        </Link>
        <div className="grid md:grid-rows-2 max-md:grid-cols-2 gap-2 h-96 max-md:h-48 ">
          <Link
            key={data![1].id}
            href={`/${data![1].category?.category}/${data![1].slug}`}
            className="group overflow-hidden relative "
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data![1].image!}
              alt=""
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium text-neutral-100">{data![1].title}</h2>
              <p className="p-2 bg-neutral-900 uppercase text-neutral-100 w-fit text-xs">
                {data![1].category?.category}
              </p>
            </div>
          </Link>
          <Link
            key={data![0].id}
            href={`/${data![0].category?.category}/${data![0].slug}`}
            className="group overflow-hidden relative "
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data![0].image!}
              alt="image"
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium text-neutral-100">{data![0].title}</h2>
              <p className="p-2 bg-neutral-900 uppercase text-neutral-100 w-fit text-xs">
                {data![0].category?.category}
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
  } else {
    return notFound();
  }
}
