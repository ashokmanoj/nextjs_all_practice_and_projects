import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-semibold">MyWebsite</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/about">About </Link>
          <Link href="/contact">Contact </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
