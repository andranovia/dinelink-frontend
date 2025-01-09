import { SidebarProvider } from "@/components/navigation/sidebar/Sidebar";
import { AppSidebar } from "@/components/navigation/sidebar/AppSidebar";
import AppHeader from "@/components/navigation/header/AppHeader";
import MenuList from "@/components/menuOrder/menuList/MenuList";
import OrderSumarry from "@/components/menuOrder/orderSumarry/OrderSumarry";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppHeader>
          <OrderSumarry>
            <MenuList />
          </OrderSumarry>
        </AppHeader>
      </main>
    </SidebarProvider>
  );
}
