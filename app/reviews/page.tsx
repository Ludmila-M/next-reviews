import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Heading from "@/app/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews(6);
  return (
    <React.Fragment>
      <Heading text={"Reviews"} />
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
                priority={index === 0}
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
