"use client";

// another way to handle not found
import { useParams } from "next/navigation";

export default function NotFound() {
  const params = useParams();
  const productId = params.productId;
  const reviewId = params.reviewId;
  return (
    <div>
      <h2>review {reviewId} for product {productId} not found</h2>
    </div>
  );
}

