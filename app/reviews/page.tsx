import React from "react";
import Link from "next/link";
import type { Metadata } from 'next';
import Heading from "@/app/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: 'Reviews',
}

export default async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <React.Fragment>
      <Heading text={"Reviews"} />
      <p>here there will be reviews</p>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold py-1 text-center">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}
