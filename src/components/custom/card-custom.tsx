import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

type CardCustomProps = {
  className?: string;
  title: string;
  count: string;
  icon: LucideIcon | IconType;
};

function CardCustom({ className, title, count, icon }: CardCustomProps) {
  const Icon = icon;
  return (
    <div
      className={twMerge(
        `flex justify-between  p-4 bg-gradient-to-r from-[#060B26] to-[#1A1F37]/50 
            backdrop-blur-md rounded-2xl items-center ${className}`
      )}
    >
      <div>
        <div className="text-lg text-gray-400">{title}</div>
        <div className="font-bold text-white">{count}</div>
      </div>
      <div className="bg-[#0075FF] p-2 whitespace-nowrap rounded-xl">
        <Icon className="text-white" />
      </div>
    </div>
  );
}

export default CardCustom;
