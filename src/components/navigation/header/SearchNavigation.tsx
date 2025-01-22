import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IoSearch } from "react-icons/io5";

interface Props {
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
}

export function SearchNavigation({
  className = "",
  placeholder = "Search Menu",
}: Props) {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative  w-full flex-1 md:flex-none justify-start rounded-md bg-muted/25 hover:bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64",
        className
      )}
    >
      <IoSearch
        aria-hidden="true"
        className="absolute left-1.5 top-1/2 -translate-y-1/2"
      />
      <span className="ml-4">{placeholder}</span>
    </Button>
  );
}
