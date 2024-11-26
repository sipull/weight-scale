import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
} from "@/components/ui/sidebar";
import { Bean, House, Wheat } from "lucide-react";
import Link from "next/link";

// Menu items.
const items = [
  {
    label: "Hasil Timbang Material",
    subMenu: [
      {
        title: "Gabah",
        url: "/grain",
        icon: Wheat,
      },
      {
        title: "Beras",
        url: "/rice",
        icon: Bean,
      },
    ],
  },
  {
    label: "Pengaturan",
    subMenu: [
      {
        title: "Produk",
        url: "/product",
        icon: Wheat,
      },
      {
        title: "Timbangan",
        url: "/",
        icon: Bean,
      },
    ],
  },
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-3 mt-4 font-bold mb-3">PB.Bintang Mulia</div>
        <SidebarContent>
          <SidebarGroup className="py-0">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <House />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {items.map((item) => {
            return (
              <SidebarGroup key={item.label}>
                <SidebarGroupLabel>{item.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.subMenu.map((subMenu) => (
                      <SidebarMenuItem key={subMenu.title}>
                        <SidebarMenuButton asChild>
                          <Link href={subMenu.url}>
                            {/* {subMenu.icon} */}
                            <span>{subMenu.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            );
          })}
        </SidebarContent>
      </SidebarHeader>
    </Sidebar>
  );
}
