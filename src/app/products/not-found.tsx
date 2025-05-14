import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <div>This Page does not exist</div>;<Link href="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
