import Image from "next/image";
import styles from "./page.module.css";
import Page from "./component/page";
import Project from "./component/project";
import Skills from "./component/skills";
import Footer from "./component/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="bg-black dark:bg-gray-900 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-slate-200 text-2xl font-semibold whitespace-nowrap dark:text-white">
              My Portfolio
            </span>
          </a>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href={
                    "https://www.linkedin.com/in/paskahl-herbert-simarmata-52a049226/"
                  }
                  className="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:text-blue-500"
                >
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:text-blue-500"
                  href={"https://github.com/PaskahlSimarmata"}
                >
                  Github
                </Link>
              </li>
              <li>
                <Link
                  className="block py-2 pl-3 pr-4 rounded text-white md:p-0 hover:text-blue-500"
                  href={"https://www.instagram.com/paskahl_hs/"}
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <Page />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Project />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
