"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  text: string;
  items: MenuItem[];
};

const DropdownMenu = ({ text, items }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-gray-100">
      <div
        className={`p-3 flex items-center rounded-md cursor-pointer hover:bg-[#07bf7b] select-none text-sm ${
          expanded ? "bg-[#07bf7b]" : ""
        }`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between w-full items-center">
          <div className="flex items-center">
            <div>{text}</div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="text-left text-sm w-7/9 mx-auto" id="submenu">
          {items.map((item, index) => (
            <Link key={index} href={{ pathname: item.href }}>
              <div className="cursor-pointer p-2 ml-4 hover:bg-[#07bf7b] rounded-md mt-1 select-none">
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
