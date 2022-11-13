import React from "react";
import Image from "next/image";
import Link from "next/link";

export const WorkCard = ({ title, description, image, link }) => {
  return (
    <Link
      href={link}
      className="dark:hover:border-pink-6 00 flex flex-col space-y-2 rounded-2xl border border-pink-200 p-4 transition-all ease-in-out hover:cursor-pointer hover:border-pink-300 hover:bg-pink-50  dark:border-pink-700  dark:hover:bg-pink-900/50"
    >
      <div className="pb-4">
        <Image
          src={image}
          width={300}
          height={500}
          alt="work"
          className="rounded"
        />
      </div>
      <div className="">
        <h3 className="text-lg font-bold text-pink-50">{title}</h3>
        <p className="pt-1 text-indigo-100">{description}</p>
      </div>
    </Link>
  );
};
