import Image from "next/image";
import React from "react";
import myPic from "./assets/foto2.jpeg";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-black pt-10 pb-5">
        <div className="flex justify-center pt-10">
          <Image
            className="rounded-full"
            style={{ filter: "grayscale()" }}
            src={myPic}
            width={100}
            height={50}
            alt="Picture of the author"
          />
        </div>
        <div className="pt-4 text-center w-full">
          <div className="text-slate-200">Hi I'm Paskahl Herbert Simarmata</div>
          <div className="flex justify-center text-medium  text-3xl mt-4 w-full">
            <h1 className="md:w-1/5 w-1/2 text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-700">
              I Build Things For the Web
            </h1>
          </div>
          <div>
            <Link href={"https://github.com/PaskahlSimarmata"}>
              <button className="text-slate-800 mt-5 py-2 px-3 rounded-xl hover:bg-gray-500 hover:text-black bg-gray-400">
                All My Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
