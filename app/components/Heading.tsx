import React, { ReactNode } from "react";

interface HeadingProps {
  text: ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return <h1 className="font-bold text-2xl pb-3 font-robotoMono">{text}</h1>;
};

export default Heading;
