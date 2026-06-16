"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

import Link from "next/link";

export default function Navbar({ scrollToSection }) {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Gameserver</NavigationMenuTrigger>
          <NavigationMenuContent className={"space-y-2"}>
            <ul className="md:w-[200px] lg:w-[300px] flex flex-col">
              <ListItem
                href="/minecraft-server-mieten"
                title="Minecraft Server"
              >
                Hole dir hier deinen eignen kostenlosen Minecraft Server
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/teamspeak-server-mieten">Teamspeak Server</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>Informationen</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Über Uns</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Support</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Für Eltern</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Blog</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Roadmap</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({ title, children, href, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
