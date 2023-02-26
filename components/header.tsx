import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="border-b">
      <div className="container">
        <div className="flex h-14 items-center">
          <Link href={`/`}>
            <h1 className="text-xl font-bold">DESIGN JISSO</h1>
          </Link>
          <span className="flex-1"></span>
          <div className="mr-4">
            <MdEmail size={24} color={"#888"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
