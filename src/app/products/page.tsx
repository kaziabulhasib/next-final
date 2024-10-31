import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Products",
  },
};

export default function Products() {
  return (
    <div className='text-center w-1/2 mx-auto border mt-24 py-8'>
      <h1 className='text-3xl'>Products</h1>
      <h2>
        <Link className='underline my-6' href='products/1'>
          Product1
        </Link>
      </h2>
      <h2>
        <Link className='underline my-6' href='products/2'>
          Product2
        </Link>
      </h2>
      <h2>
        <Link className='underline my-6' href='products/3'>
          Product3
        </Link>
      </h2>

      <button className='border-red-500 border-2 rounded-lg px-6 py-2 font-medium my-6'>
        <Link href='/'>Home</Link>
      </button>
    </div>
  );
}
