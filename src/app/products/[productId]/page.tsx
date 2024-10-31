interface PageProps {
  params: {
    productId: string;
  };
}

export default function ProductDetails({ params }: PageProps) {
  const { productId } = params;
  return (
    <div>
      <h1>Product details of : {productId}</h1>
    </div>
  );
}
