import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function page({ params }: PageProps) {
  const { id } = await params;
  return <div className='text-7xl text-center my-36'>page details : {id}</div>;
}
