import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t-2 border-gray-100 mt-3">
        {/*   Grid   */}
        <div className="text-center">
          <div>
            <Link
              className="flex-none text-xl font-semibold text-black"
              href="https://serm-dev.vercel.app"
            >
              Serm-Dev
            </Link>
          </div>
          {/*   End Col   */}
          {/*   End Col   */}
          <ul className="text-center">
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800   "
                href="/about-api"
              >
                Qrcode Api
              </Link>
            </li>

            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800   "
                href="/#qrGenerator"
              >
                Qrcode Generator
              </Link>
            </li>
            <li className="inline-block relative pe-8 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <Link
                className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800   "
                href="https://serm-dev.vercel.app"
              >
                More free Api
              </Link>
            </li>
          </ul>
          {/*   End Col   */}

          <div className="mt-3">
            <p className="text-gray-500">
              We're part of the{" "}
              <a
                className="font-semibold text-blue-600 hover:text-blue-700"
                href="#"
              >
                SermDev
              </a>{" "}
              family.
            </p>
            <p className="text-gray-500">
              © SermDev. 2023 Qrcode. All rights reserved.
            </p>
          </div>

          {/*   Social Brands   */}
          <div className="mt-3 space-x-2" id="contact">
            <Link
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition "
              href="mailto:sermdeveloper.gmail.com"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
              </svg>
            </Link>

            <Link
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition "
              href="https://github.com/Serm357"
              target="_blank"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </Link>
            <Link
              className="inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition "
              href="https://serm-dev.vercel.app"
              target="_blank"
            >
              <Image
                src="/logo.png"
                width={44}
                height={44}
                alt="sermdev avatar"
                className="flex-shrink-0 w-3.5 h-3.5 rounded-full"
              />
            </Link>
          </div>
          {/*   End Social Brands   */}
        </div>
        {/*   End Grid   */}
      </footer>
    </>
  );
};
export default Footer;
