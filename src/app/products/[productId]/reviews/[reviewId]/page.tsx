import React from "react";

export default function page({ params }: { params: { reviewId: string } }) {
  return (
    <div>
      <h1>review details of : {params.reviewId}</h1>
    </div>
  );
}
