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
  placeholder = "Search",
}: Props) {
  return (
    <Button
      variant="outline"
      className={cn(
        "relative h-8 w-full flex-1 md:flex-none justify-start rounded-md bg-muted/25 hover:bg-muted/50 text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64",
        className
      )}
    >
      <IoSearch
        aria-hidden="true"
        className="absolute left-1.5 top-1/2 -translate-y-1/2"
      />
      <span className="ml-3">{placeholder}</span>
      <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}