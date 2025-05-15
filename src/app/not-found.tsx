import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="text-center">
      <div>This Page does not exist</div>
      <Link className="underline hover:text-blue-700" href="/">
        Press Here To Go Back
      </Link>
    </div>
  );
};

export default NotFound;
