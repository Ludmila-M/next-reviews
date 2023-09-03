import React from "react";
import Link from "next/link";
import Heading from "../components/Heading";

export default function ReviewsPage() {
  return (
    <React.Fragment>
    <Heading text={'Reviews'}/>
      <p>here there will be reviews</p>
      <ul>
        <li>
          <Link href="/reviews/hollow-knight">Hollow Knight</Link>
        </li>
        <li>
          <Link href="/reviews/stardew-valley">Stardew Valley</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
