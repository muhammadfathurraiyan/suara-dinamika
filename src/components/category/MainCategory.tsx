import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function MainCategory({
  data,
}: {
  data:
    | {
        category: string;
        article: {
          body: string;
          created_at: string;
          created_by: string;
          id: string;
          image: string;
          slug: string;
          status: boolean;
          title: string;
        } | null;
      }[]
    | undefined;
}) {
  if (data?.length !== 0) {
    return (
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 md:row-span-2">
        <Link
          href={`/${data![2].category}/${data![2].article?.slug}`}
          className="group relative h-96 max-md:h-48 overflow-hidden"
        >
          <Image
            className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
            src={data![2].article?.image!}
            alt=""
            width={1}
            height={1}
          />
          <div className="absolute bottom-0 left-0 p-2 pt-8 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
            <h2 className="md:text-2xl font-medium text-neutral-100">
              {data![2].article?.title}
            </h2>
            <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
              {data![2].category}
            </p>
          </div>
        </Link>
        <div className="grid md:grid-rows-2 max-md:grid-cols-2 gap-2 h-96 max-md:h-48 ">
          <Link
            href={`/${data![1].category}/${data![1].article?.slug}`}
            className="group overflow-hidden relative "
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data![1].article?.image!}
              alt=""
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium text-neutral-100">
                {data![1].article?.title}
              </h2>
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                {data![1].category}
              </p>
            </div>
          </Link>
          <Link
            href={`/${data![0].category}/${data![0].article?.slug}`}
            className="group overflow-hidden relative "
          >
            <Image
              className="min-w-full h-full object-cover group-hover:scale-105 duration-300"
              src={data![0].article?.image!}
              alt=""
              width={1}
              height={1}
            />
            <div className="absolute bottom-0 left-0 p-2 pt-3 flex flex-col gap-2 bg-gradient-to-t from-neutral-900/50 to-transparent">
              <h2 className="font-medium text-neutral-100">
                {data![0].article?.title}
              </h2>
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                {data![0].category}
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
