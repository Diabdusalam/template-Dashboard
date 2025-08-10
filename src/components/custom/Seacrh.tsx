import { SearchIcon } from "lucide-react";
import { forwardRef, InputHTMLAttributes } from "react";

type SearchProps = InputHTMLAttributes<HTMLInputElement>;

const SearchComponent = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={` border rounded-full items-center flex px-2 py-1 border-[#4e526b]  mx-auto max-w-[650px] ${className}`}
      >
        <SearchIcon className="w-5  text-[#4e526b]" />
        <input
          ref={ref}
          type="text"
          placeholder="Type here..."
          className=" border-none  w-full outline-none focus:outline-none px-2 py-1 bg-transparent"
          {...props}
        />
      </div>
    );
  }
);

export default SearchComponent;
