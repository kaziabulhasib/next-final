import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <button className='border-red-500 border-2 rounded-lg px-6 py-2 font-medium my-6'>
        <Link href='products'>Products</Link>
      </button>
    </div>
  );
}
