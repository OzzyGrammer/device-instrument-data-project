"use client";

import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const BasicSection = ({ children }: Props) => {
  return (
    <div className="bg-white p-8 rounded">
      <div>{children}</div>
    </div>
  );
};

export default BasicSection;
