import React from "react";

export default async function page({
  params,
}: {
  params: { reviewId: string };
}) {
  const { reviewId } = params;
  return (
    <div>
      <h1>review details of : {reviewId}</h1>
    </div>
  );
}
