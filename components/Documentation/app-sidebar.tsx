"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { GalleryVerticalEnd } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/Documentation/",
      items: [
        { title: "Register", url: "/Documentation/#register" },
        { title: "Login", url: "/Documentation/#login" },
        { title: "Set Penalty Percentage", url: "/Documentation/#penalty" },
      ],
    },
    {
      title: "Agent Management",
      url: "/Documentation/Agents",
      items: [
        {
          title: "Register New Admin",
          url: "/Documentation/Agents/#adminRegister",
        },
        { title: "Add Agent", url: "/Documentation/Agents/#addAgent" },
        {
          title: "Delete and Update",
          url: "/Documentation/Agents/#agentUpdate",
        },
      ],
    },
    {
      title: "Client Management",
      url: "/Documentation/Clients",
      items: [
        { title: "Add Client", url: "/Documentation/Clients/#addClient" },
        {
          title: "Delete and Update",
          url: "/Documentation/Clients/#clientUpdate",
        },
      ],
    },
    {
      title: "Loans Management",
      url: "/Documentation/Loans",
      items: [
        { title: "Add Loan", url: "/Documentation/Loans/#addLoan" },
        { title: "Delete and Update", url: "/Documentation/Loans/#loanUpdate" },
      ],
    },
    {
      title: "Payments",
      url: "/Documentation/Payments",
      items: [
        { title: "Add Payment", url: "/Documentation/Payments/#addPayment" },
        {
          title: "Delete and Update",
          url: "/Documentation/Payments/#paymentUpdate",
        },
      ],
    },
    {
      title: "Reports",
      url: "/Documentation/Reports",
      items: [{ title: "Download", url: "/Documentation/Reports/#download" }],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = React.useState("");

  // Listen for hash changes to update active states
  React.useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  function isActiveLink(url: string) {
    if (!url) return false;

    const [path, hash] = url.split("#");

    // For exact path matches (like /Documentation/Agents)
    if (!hash) {
      return pathname === path;
    }

    // For hash-based URLs, check both path and hash
    const isPathMatch = pathname === path;
    const isHashMatch = currentHash === `#${hash}`;

    return isPathMatch && isHashMatch;
  }

  function isActiveMainItem(item: (typeof data.navMain)[0]) {
    // Check if main item URL is active (exact match for main pages)
    if (pathname === item.url) return true;

    // For paths with trailing slash vs without (e.g., /Documentation/ vs /Documentation)
    const normalizedPath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;
    const normalizedItemUrl = item.url.endsWith("/")
      ? item.url.slice(0, -1)
      : item.url;
    if (normalizedPath === normalizedItemUrl) return true;

    // Check if we're on a sub-page of this main item
    if (pathname.startsWith(item.url) && pathname !== item.url) return true;

    // Check if any sub-item is active (for hash-based navigation)
    return item.items?.some((subItem) => isActiveLink(subItem.url)) || false;
  }

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="./">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActiveMainItem(item)}>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={isActiveLink(subItem.url)}
                        >
                          <a href={subItem.url}>{subItem.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
