import React from "react";
import Heading from "../../components/Heading";

export default function ReviewsPage() {
  return (
    <React.Fragment>
      <Heading text={"Hollow Knight"} />
      <img
        src="/images/hollow-knight.jpg"
        alt=""
        width="640"
        height="360"
        className="rounded mb-2"
      />
      <p>review for Hollow Knight</p>
    </React.Fragment>
  );
}
