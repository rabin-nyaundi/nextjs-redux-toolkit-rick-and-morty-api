import React from "react";
import Image from "next/image";
import Link from "next/link";
import imageLoader from "../ImageLoader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full m-auto">
      <div className="flex justify-between items-center nav w-full h-14 bg-slate-700  p-4">
        <div className="mt-1 rounded-lg">
          <Link href="/">
            <a className="text-white">
              <Image
                loader={imageLoader}
                unoptimized
                src="/images/rick-and-morty.jpg"
                height={50}
                width={80}
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div>
          <ul className="list-none text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-white">Login</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
