import readAllSlugAction from "@/actions/global/readAllSlugAction";
import readUserProfileAction from "@/actions/global/readUserProfileAction";
import readArticleBySlugAction from "@/actions/global/readArticleBySlugAction";
import readUserAction from "@/actions/user/readUserAction";
import Body from "@/components/article/Body";
import Popular from "@/components/category/Popular";
import Recomendation from "@/components/category/Recomendation";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocialSharp, IoLogoWhatsapp } from "react-icons/io5";
import { notFound } from "next/navigation";
import timeAgoOrDate from "@/libs/action/timeAgoOrDate";
import addViewAction from "@/actions/global/addViewAction";

export default async function Article({
  params: { article },
}: {
  params: { article: string };
}) {
  const { data: parameter } = await readAllSlugAction();
  const { data } = await readArticleBySlugAction(article);
  const articles = data![0];
  if (!articles) {
    return notFound();
  }
  const { data: editor } = await readUserProfileAction(articles.created_by);
  const result = await addViewAction(articles.id);

  if (parameter?.some((i) => i.slug.includes(article))) {
    return (
      <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
          <div className="md:col-span-2 flex flex-col gap-2 mb-80">
            <h1 className="font-bold text-3xl uppercase">{articles.title}</h1>
            <p className="text-xs">
              &#8226; {timeAgoOrDate(new Date(articles.created_at))}
            </p>
            <div className="flex gap-2 items-center">
              <Link
                href="/"
                aria-label="Whatsapp"
                className="p-2 text-neutral-100 bg-green-500 text-2xl"
              >
                <IoLogoWhatsapp />
              </Link>
              <Link
                href="/"
                aria-label="Facebook"
                className="p-2 text-neutral-100 bg-blue-700 text-2xl"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="/"
                aria-label="X"
                className="p-2 text-neutral-100 bg-neutral-900 text-2xl"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="/"
                aria-label="Telegram"
                className="p-2 text-neutral-100 bg-cyan-600 text-2xl"
              >
                <FaTelegramPlane />
              </Link>
              <Link
                href="/"
                aria-label="Share"
                className="p-2 text-neutral-100 bg-red-600 text-2xl"
              >
                <IoShareSocialSharp />
              </Link>
            </div>
            <div className="flex flex-col items-start gap-2">
              <Image
                width={1}
                height={1}
                className="w-full"
                src={articles.image}
                alt="cover image"
              />
              <Body body={articles.body} />
            </div>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="p-2 bg-neutral-900 uppercase text-neutral-100 w-fit text-xs">
                  {articles.category?.category}
                </p>
                <p className="text-xs">
                  &#8226; {timeAgoOrDate(new Date(articles.created_at))}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  className="w-12 h-12 object-cover rounded-full"
                  src={editor![0].user?.image!}
                  alt="editor"
                  width={1}
                  height={1}
                />
                <div>
                  <p className="font-semibold uppercase">
                    {editor![0].user?.name}
                  </p>
                  <p className="text-xs -mt-1">Editor</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="font-semibold">BAGIKAN:</p>
                <div className="flex gap-2 items-center">
                  <Link
                    href="/"
                    aria-label="Whatsapp"
                    className="p-2 text-neutral-100 bg-green-500 text-2xl"
                  >
                    <IoLogoWhatsapp />
                  </Link>
                  <Link
                    href="/"
                    aria-label="Facebook"
                    className="p-2 text-neutral-100 bg-blue-700 text-2xl"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="/"
                    aria-label="X"
                    className="p-2 text-neutral-100 bg-neutral-900 text-2xl"
                  >
                    <FaXTwitter />
                  </Link>
                  <Link
                    href="/"
                    aria-label="Telegram"
                    className="p-2 text-neutral-100 bg-cyan-600 text-2xl"
                  >
                    <FaTelegramPlane />
                  </Link>
                  <Link
                    href="/"
                    aria-label="Share"
                    className="p-2 text-neutral-100 bg-red-600 text-2xl"
                  >
                    <IoShareSocialSharp />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Recomendation />
        </div>
        <Popular />
      </section>
    );
  } else {
    return notFound();
  }
}
