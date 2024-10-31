import React from "react";

import { notFound } from "next/navigation";

export default async function page({
  params,
}: {
  params: { reviewId: string };
}) {
  const { reviewId } = params;
  if (parseInt(reviewId) > 100) {
    notFound();
  }
  return (
    <div>
      <h1>review details of : {reviewId}</h1>
    </div>
  );
}
