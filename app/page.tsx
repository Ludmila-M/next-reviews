import Link from "next/link";
import React from "react";
import Heading from './components/Heading'

export default function HomePage() {
  return (
    <React.Fragment>
       <Heading text={'Indie Gamer'}/>
        <p className="pb-3">only the best indie games, reviewed for you.</p>
        <div className="border bg-white rounded shadow w-80 sm:w-full hover:shadow-xl">
          <Link href="/reviews/hollow-knight" className="flex flex-col sm:flex-row">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="text-center py-1 font-orbitron sm:px-2">Hollow Knight</h2>
          </Link>
        </div>
    </React.Fragment>
  );
}
