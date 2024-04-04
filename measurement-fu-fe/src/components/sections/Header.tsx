"use client";

type Props = {
  title: string;
  description: string;
};

const Header = ({ title, description }: Props) => {
  return (
    <header className="flex text-[#495057] bg-[rgba(255,255,255,0.45)] shadow-sm p-[40px] w-full">
      <div className="flex flex-col">
        <h1 className="text-xl">{title}</h1>
        <div className="text-sm opacity-60 mt-1">{description}</div>
      </div>
    </header>
  );
};

export default Header;
