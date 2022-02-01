import React from "react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full ">
      <div className="flex justify-between items-center nav w-full h-14 bg-slate-700  p-4">
        <div className="logo">
          <Link href="/">
            <a className="text-white">Logo</a>
          </Link>
        </div>
        <div>Menu items</div>
        <div>User icon</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
