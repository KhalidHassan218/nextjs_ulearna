import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="underline text-blue-700">not-found</div>
      <Link className="underline text-lg text-blue-700" href={"/"}>
        Go back To Home Page
      </Link>
    </>
  );
};

export default NotFound;
