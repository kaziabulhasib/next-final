import React from "react";

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h1 className='bg-blue-400 text-gray-700 py-6'>Featured Products</h1>
    </div>
  );
}
