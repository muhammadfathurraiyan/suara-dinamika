import timeAgoOrDate from "@/libs/action/timeAgoOrDate";
import Image from "next/image";
import Link from "next/link";

export default function Opini({
  data,
}: {
  data:
    | {
        id: string;
        slug: string;
        title: string;
        image: string;
        created_at: string;
        category: {
          category: string;
        } | null;
      }[]
    | null;
}) {
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
      <div>
        <h1 className="font-semibold text-xl p-2 bg-neutral-900 text-neutral-100 w-fit">
          OPINI
        </h1>
        <div className="h-1 w-full bg-neutral-900" />
      </div>
      <div className="grid md:grid-cols-3 max-md:grid-rows-3 items-start gap-2">
        {data?.map((opini) => (
          <Link
            key={opini.id}
            href={`/${opini.category?.category}/${opini.slug}`}
            className="grid border border-neutral-900/30 grid-rows-2 w-full h-96 gap-2"
          >
            <div className=" group overflow-hidden">
              <Image
                className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
                src={opini.image}
                alt={opini.title}
                width={1}
                height={1}
              />
            </div>
            <div className="flex flex-col p-2 justify-between items-start">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-medium md:text-lg">{opini.title}</h2>
                <p className="text-xs">
                  &#8226; {timeAgoOrDate(new Date(opini.created_at))}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="p-2 uppercase bg-neutral-900 text-neutral-100 w-fit text-xs">
                  {opini.category?.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
