import React from "react";
import angular from "./assets/angular.png";
import tailwind from "./assets/tailwind.png";
import react from "./assets/react.png";
import next from "./assets/next.png";
import Image from "next/image";
import git from "./assets/git.png";
import Link from "next/link";
export default function Skills() {
  return (
    <div className=" bg-black opacity-90 px-10 pt-10 pb-6">
      <div className="text-slate-300 text-3xl font-medium text-center">
        My Skills
      </div>

      <div className="text-white grid  sm:grid-cols-2 gap-x-3 md:grid-cols-3 xl:grid-cols-5 px-5 mt-5">
        <Link href={"https://angular.io/"}>
          <div className="flex mt-3 hover:scale-95 cursor-pointer justify-center rounded-lg">
            <Image
              className="rounded-xl scale-75"
              style={{ filter: "grayscale()", height: "100px" }}
              src={angular}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link href={"https://nextjs.org/"}>
          <div className="flex mt-3 hover:scale-95 cursor-pointer  justify-center rounded-lg">
            <Image
              className="rounded-xl scale-75"
              style={{ filter: "grayscale()", height: "100px" }}
              src={next}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link href={"https://tailwindcss.com/"}>
          <div className="flex mt-3 hover:scale-95 cursor-pointer  justify-center rounded-lg">
            <Image
              className="rounded-xl scale-75"
              style={{ filter: "grayscale()", height: "100px" }}
              src={tailwind}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link href={"https://react.dev/"}>
          <div className="flex mt-3 hover:scale-95 cursor-pointer  justify-center rounded-lg">
            <Image
              className="rounded-xl scale-90"
              style={{ filter: "grayscale()", height: "100px" }}
              src={react}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link href={"https://git-scm.com/"}>
          <div className="flex mt-3 hover:scale-95 cursor-pointer  justify-center rounded-lg">
            <Image
              className="rounded-xl scale-75"
              style={{ filter: "grayscale()", height: "100px" }}
              src={git}
              alt="Picture of the author"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
