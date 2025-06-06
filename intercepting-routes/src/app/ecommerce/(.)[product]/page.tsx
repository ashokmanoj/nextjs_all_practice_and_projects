// 'use client';
import { products } from "@/app/db/data";
// import { useRouter } from "next/navigation";

const InterceptedProductOne = async ({
  params,
}: {
  params: { product: string };
}) => {
  const { product } = await params;


  const findProduct = products.find((f) => f.id === +product);
  console.log("--------- findProduct", findProduct);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center relative">
          {/* <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => {
              useRouter().push("/ecommerce");
            }}
          >
            X
          </button> */}
          <h1 className="text-3xl mb-4">{findProduct?.name}</h1>

          <img
            src={findProduct?.image}
            alt={findProduct?.name}
            className="w-[40rem] mx-auto rounded-lg"
          />

          <p className="text-2xl mt-4">Price: {findProduct?.price}</p>
        </div>
      </div>
    </>
  );
};

export default InterceptedProductOne;