import Image from "next/image";
import React from "react";
import binar from "./assets/binar.jpeg";
import saksi from "./assets/saksi.jpeg";
import crypto from "./assets/crypto.jpeg";
import Link from "next/link";
export default function Project() {
  return (
    <div className="bg-black opacity-95 pt-10 pb-6">
      <div className="text-slate-300 text-3xl font-medium text-center">
        My Project
      </div>
      <div className="text-white grid sm:grid-cols-2 gap-x-3 md:grid-cols-3 xl:grid-cols-3 px-5 mt-5">
        <Link href={"https://github.com/PaskahlSimarmata/binar-car-rent"}>
          <div className="mt-3 hover:scale-95 cursor-pointer justify-center border-2 border-slate-900 rounded-lg">
            <Image
              className="rounded-xl h-1/2"
              src={binar}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link href={"https://hanura.xtend.my.id/"}>
          <div className="flex mt-3  hover:scale-95 cursor-pointer  justify-center border-2 border-slate-900 rounded-lg">
            <Image
              className="rounded-xl"
              src={saksi}
              alt="Picture of the author"
            />
          </div>
        </Link>
        <Link
          href={"https://github.com/PaskahlSimarmata/crypto-checker-angular"}
        >
          <div className="flex mt-3 hover:scale-95 cursor-pointer  justify-center border-2 border-slate-900 rounded-lg">
            <Image
              className="rounded-xl"
              src={crypto}
              alt="Picture of the author"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
