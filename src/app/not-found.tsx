"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className='text-center my-8 space-y-6'>
      <h1 className='text-3xl text-red-500'>Not found</h1>
      <p>Page is not found, back to home</p>
      <button
        className='border-red-500 border-2 rounded-lg px-6 py-2 font-medium'
        onClick={() => router.push("/")}>
        Home
      </button>
      <button
        onClick={() => router.back()}
        className='border-red-500 border-2 rounded-lg px-6 py-2 font-medium'>
        Prev Page
      </button>
    </div>
  );
}
