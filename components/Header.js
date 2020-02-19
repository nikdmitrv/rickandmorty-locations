import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <img src="/images/Header.png" alt="header"></img>
      </Link>
    </div>
  );
};

export default Header;
