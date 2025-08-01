import { LucideIcon } from "lucide-react";
import Link from "next/link";

type TLinks = {
  id: string;
  name: string;
  icon?: LucideIcon;
  link: string;
  childrem?: TLinks[];
};

export default function ButtonSidebar({
  data,
  isActive,
}: {
  data: TLinks;
  isActive: boolean;
}) {
  return (
    <Link href={data.link}>
      <div
        className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-colors 
        ${
          isActive
            ? "bg-[#0075FF] text-white"
            : "text-[#9DB2C6] hover:bg-[#1A1F37] hover:text-white"
        }`}
      >
        {data.icon && (
          <div
            className={`p-2 rounded-xl transition-colors 
            ${
              isActive
                ? "bg-white text-[#0075FF]"
                : "bg-[#1A1F37] group-hover:bg-[#0075FF] group-hover:text-white"
            }`}
          >
            <data.icon className="w-4 h-4" />
          </div>
        )}
        <span className="text-sm font-medium">{data.name}</span>
      </div>
    </Link>
  );
}
