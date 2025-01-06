import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

interface TopNavigationProps extends React.HTMLAttributes<HTMLElement> {
  RestaurantName: string;
  Open: boolean;
}

export function TopNavigation({ RestaurantName, Open }: TopNavigationProps) {
  return (
    <>
      {/* <div className="md:hidden">
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="outline">
              <BsMenuApp />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="start">
            <Button className="w-full items-center">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <span> {RestaurantName}</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="scale-95 rounded-full"
            >
              <span className="sr-only">Open</span>
            </Button>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}

      <NavigationMenu className="hidden items-center space-x-4 md:flex lg:space-x-6">
        <NavigationMenuList className="flex items-center gap-2">
          <NavigationMenuItem>
            <Button
              className="w-full items-center px-3 border"
              variant="ghost"
              size="icon"
            >
              <Avatar className="h-5 w-5">
                <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <span className="font-semibold"> {RestaurantName}</span>
            </Button>

            <NavigationMenuContent>
              <NavigationMenuLink>Open</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Separator orientation="vertical" className="h-4" />
          <NavigationMenuItem>
            <Button
              className={`w-full items-center px-3   ${
                Open
                  ? "bg-green-200 hover:bg-green-200 text-green-700"
                  : "bg-red-200 hover:bg-red-200 text-red-700"
              }`}
              variant="ghost"
              size="icon"
            >
              <span className="font-medium text-sm">
                {" "}
                {!Open ? "Closed" : "Open"}
              </span>
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}
