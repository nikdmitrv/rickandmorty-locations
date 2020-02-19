import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <Link href="/">
        <img src="/images/Header.png" alt="header"></img>
      </Link>
    </header>
  );
};

export default Header;
