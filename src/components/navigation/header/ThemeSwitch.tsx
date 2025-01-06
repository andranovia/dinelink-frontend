import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsCheck, BsMoon, BsSun } from "react-icons/bs";

export function ThemeSwitch() {
  //   const { theme, setTheme } = useTheme();

  /* Update theme-color meta tag
   * when theme is updated */
  //   useEffect(() => {
  //     const themeColor = theme === "dark" ? "#020817" : "#fff";
  //     const metaThemeColor = document.querySelector("meta[name='theme-color']");
  //     if (metaThemeColor) metaThemeColor.setAttribute("content", themeColor);
  //   }, [theme]);

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="scale-95 rounded-full">
          <BsSun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <BsMoon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>
          Light <BsCheck size={14} className={cn("ml-auto")} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          Dark
          <BsCheck size={14} className={cn("ml-auto")} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          System
          <BsCheck size={14} className={cn("ml-auto")} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
