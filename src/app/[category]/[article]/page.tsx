import Link from "next/link";
import { FaFacebookF, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoShareSocialSharp, IoLogoWhatsapp } from "react-icons/io5";

export default function Article({
  params,
}: {
  params: { category: string; slug: string };
}) {
  return (
    <section className="px-36 max-xl:px-12 max-md:px-4 py-8 flex flex-col gap-2">
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
        <div className="md:col-span-2 flex flex-col gap-2 mb-80">
          <h1 className="font-bold text-3xl uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            rerum odit dignissimos officia?
          </h1>
          <p className="text-xs">&#8226; 10 menit yang lalu</p>
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
            <img className="w-full" src="https:picsum.photos/600" alt="" />
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
              rerum nulla beatae quam libero sint ipsum ipsa ut cumque ex ullam,
              vel rem iure voluptates praesentium minus blanditiis architecto
              quisquam natus! Veniam voluptates necessitatibus labore eligendi
              tenetur consequatur est, doloribus vero ex nisi temporibus non,
              corporis hic praesentium reprehenderit architecto assumenda saepe,
              dolores ipsum pariatur repellat. Adipisci esse at eius atque a
              incidunt similique ipsum quisquam, repudiandae dolorem facilis
              minima ab modi iusto. Asperiores molestias quos, ipsa, officiis
              numquam, odio beatae autem accusantium esse doloribus optio est
              vitae. Aliquam ipsum consequatur, ea praesentium reiciendis
              quisquam labore voluptas, eius nobis doloremque dicta voluptatum
              exercitationem sunt quia. A rerum, porro exercitationem ipsum
              officiis aspernatur error tempora tenetur reprehenderit deleniti
              hic provident culpa, perspiciatis quod aliquid autem odio.
              Necessitatibus facilis aliquid distinctio aperiam in voluptatibus
              vero, perferendis ea, dolorum tempora debitis officia. Facilis
              eius tenetur illum quidem earum nihil maxime iusto ea voluptas
              nesciunt, impedit id voluptatem? Repudiandae natus nostrum esse
              sunt, necessitatibus laudantium ex maxime possimus et beatae id
              dolores iste ea blanditiis deserunt eveniet, maiores est non.
              Repudiandae facilis, at error sit a voluptatum ratione eum
              excepturi consequatur cupiditate, voluptates quis dolores! Sit
              repellendus aut ipsam voluptatibus amet nostrum blanditiis neque
              molestias ea illum atque molestiae exercitationem explicabo
              deserunt mollitia, quis est facere laudantium saepe, harum fugiat,
              nam iusto! Nam eius magni sint doloremque illo tenetur cupiditate
              dolorum distinctio. At, sapiente. Nostrum vel reiciendis quibusdam
              quae, facere recusandae libero, animi totam similique expedita
              eligendi modi, nam at eos cumque dolores. Omnis voluptas esse nam
              provident consectetur maiores rerum error blanditiis. Est minus
              sapiente consectetur, explicabo deserunt reprehenderit nesciunt
              beatae nihil libero odit laborum sequi animi harum error quae
              dicta obcaecati dignissimos aut facilis earum, quaerat distinctio?
              Libero, ipsum earum! Aperiam accusamus fugit nemo porro maxime et
              quisquam nisi necessitatibus minus fuga.
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                className="w-12 rounded-full"
                src="https://picsum.photos/600"
                alt=""
              />
              <div>
                <p className="font-semibold uppercase">Sabirin Lamno</p>
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
        <div className="flex flex-col gap-2 mb-80 md:mt-[25.25rem]">
          <div>
            <h1 className="font-semibold p-2 text-xl bg-neutral-900 text-neutral-100 w-fit uppercase">
              REKOMENDASI
            </h1>
          </div>
          <Link
            href="/"
            className="grid border border-neutral-900/30 grid-rows-2 w-full h-[24.5rem] gap-2"
          >
            <div className=" group overflow-hidden">
              <img
                className="min-w-full max-h-full object-cover group-hover:scale-105 duration-300"
                src="https://picsum.photos/600"
                alt=""
              />
            </div>
            <div className="flex flex-col p-2 justify-between items-start">
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="font-medium md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis, sapiente quos. Eum, recusandae.
                </h2>
                <p className="text-xs">&#8226; 10 menit yang lalu</p>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                  BUDAYA
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-semibold p-2 text-xl bg-neutral-900 text-neutral-100 w-fit uppercase">
            ARTIKEL POPULER
          </h1>
          <div className="h-1 w-full bg-neutral-900" />
        </div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-2">
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="flex h-48 border border-neutral-900/30 flex-col p-2 justify-between items-start"
          >
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="font-medium md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis, sapiente quos. Eum, recusandae.
              </h2>
              <p className="text-xs">&#8226; 10 menit yang lalu</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p className="p-2 bg-neutral-900 text-neutral-100 w-fit text-xs">
                BUDAYA
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
