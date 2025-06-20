

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "../theme/themes";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Cardápio",
    url: "/cardapio",
  
  },
  {
    title: "Clientes",
    url: "/clientes",
  
  },
  {
    title: "Pedidos",
    url: "#",
 
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
 
  },
];

export function AppSidebar() {

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl p-2 flex gap-2 items-center">
           
            <Link href="/">            
            HOME
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent >
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>                   
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
        <ModeToggle/>              
    </Sidebar>
  );
}
