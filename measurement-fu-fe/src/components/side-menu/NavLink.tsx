"use client";

import Link from "next/link";

type Props = {
  text: string;
  url: string;
};

const NavLink = ({ text, url }: Props) => {
  return (
    <Link href={{ pathname: url }}>
      <div className="p-3 flex items-center rounded-md cursor-pointer hover:bg-[#07bf7b] text-gray-100 select-none">
        <div className="text-sm">{text}</div>
      </div>
    </Link>
  );
};

export default NavLink;
