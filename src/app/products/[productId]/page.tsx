import { Metadata } from "next";

type PageProps = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({ params }: PageProps): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

export default function ProductDetails({ params }: PageProps) {
  const { productId } = params;
  return (
    <div>
      <h1>Product details of : {productId}</h1>
    </div>
  );
}
