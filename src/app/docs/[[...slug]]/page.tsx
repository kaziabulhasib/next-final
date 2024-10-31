import React from "react";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function Docs({ params }: PageProps) {
  //   const { slug } = params;
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing docs for feature of {params.slug[0]} and concept of{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing docs for feature {params.slug[0]} </h1>;
  }
  return <div>Docs Page</div>;
}
