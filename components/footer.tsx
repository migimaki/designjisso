import Link from "next/link";
import React from "react";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t pb-12">
      <div className="container">
        <div className="flex h-14 items-center">
          <Link href={`/`}>
            <h1 className="text-md font-bold">DESIGN JISSO</h1>
          </Link>
          <span className="flex-1"></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
