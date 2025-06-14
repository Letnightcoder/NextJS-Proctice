import { notFound } from "next/navigation";

export default async function ReviewDetails({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Review details {reviewId} for product {productId}</h1>
    </div>
  );
}