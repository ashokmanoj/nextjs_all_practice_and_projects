"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Fragment } from "react";

const Page1 = () => {
  const router = useRouter();
//   console.log(router);

  const nextpage = () => {
    router.push("/nextpage");
  };

  return (
    <Fragment>
      <div className="text-center mt-10 mb-10 text-3xl font-bold text-white-800 ">
        This is a page 1 Landing Page
      </div>
      <div className="text-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => nextpage()}>
          Move To Next Page
        </button>
        {/* <Link href={'/page2'}>Home</Link> */}
      </div>
    </Fragment>
  );
};

export default Page1;
