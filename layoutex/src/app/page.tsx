import Image from "next/image";
import Link from "next/link";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <h1>This IS our home page</h1>
      <HomePage />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Link href={'/page1'}>Page1</Link>
      </button>
    </div>
  );
}
