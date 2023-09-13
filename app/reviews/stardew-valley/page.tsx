import React from "react";
import Heading from "../../components/Heading";

export default function ReviewsPage() {
  return (
    <React.Fragment>
    <Heading text={'Stardew Valley'}/><img
        src="/images/stardew-valley.jpg"
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <p>review for Stardew Valley</p>
    </React.Fragment>
  );
}
