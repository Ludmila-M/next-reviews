import React from "react";
import type { Metadata } from 'next';
import Heading from "../components/Heading";

export const metadata: Metadata = {
  title: 'About',
}

export default function AboutPage() {
  return (
    <React.Fragment>
    <Heading text={'About'}/>
        <p>here there will be an about section</p>
    </React.Fragment>
  );
}
