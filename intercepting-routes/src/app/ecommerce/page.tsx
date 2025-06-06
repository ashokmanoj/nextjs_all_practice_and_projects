import Link from "next/link";
import { products } from "../db/data";

const Ecommerce = () => {

  return (
    <div>
      <section className="m-[4rem] ">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce</h1>
        </div>

        <section className="flex gap-3 ">
          {products.map((product) => (
            <div className="w-[200px] border p-[1rem]" key={product.id}>
              <Link href={`/ecommerce/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Ecommerce;