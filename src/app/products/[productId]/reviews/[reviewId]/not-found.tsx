import Link from "next/link";
import React from "react";

export default function ReviewNotFound() {
  return (
    <div>
      <h1>Review Not Found</h1>
      <button className='border-red-500 border-2 rounded-lg px-6 py-2 font-medium'>
        <Link href='/products/1/reviews'>Home</Link>
      </button>
    </div>
  );
}
