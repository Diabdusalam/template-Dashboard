import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons/lib";

type cardProps = {
  icon: LucideIcon | IconType;
  title: string;
  count: string;
  persentage?: number;
};

function CardActiveUser({ icon: Icon, title, count, persentage }: cardProps) {
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-400 font-medium mb-2">
        <div className="bg-[#0075FF] w-6 h-6 flex justify-center items-center rounded-md">
          <Icon className="text-white text-xs" />
        </div>
        {title}
      </div>
      <div className="text-white text-lg font-bold mb-2">{count}</div>
      <div className="w-full h-2 bg-[#2D2E5F] rounded-full overflow-hidden">
        <div className={`h-full bg-blue-500 w-[${persentage}%]`}></div>
      </div>
    </div>
  );
}

export default CardActiveUser;
