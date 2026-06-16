import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Plus,
  Server,
  Settings,
  User,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import { toast } from "sonner";

function SignOut() {
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await authClient.signOut();
    if (error) {
      toast.error(error.message || "Something went wrong");
    } else {
      toast.success("Erfolgreich ausgeloggt!");
      router.push("/");
    }
  }

  return (
    <DropdownMenuItem
      onClick={handleSignOut}
      className="cursor-pointer text-destructive focus:text-destructive"
    >
      <LogOut className="mr-2 h-4 w-4" />
      <span>Abmelden</span>
    </DropdownMenuItem>
  );
}

export default function UserAction({ session }) {
  // const session = true; // Replace with actual session logic
  if (!session)
    return (
      <div className="flex items-center">
        <Button className="hover:bg-primary/80">
          <Link href="/login" className="flex items-center gap-2">
            <LogIn className="h-4 w-4" />
            Sign In
          </Link>
        </Button>
      </div>
    );

  const user = session?.user;

  const userInitials = user
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  return (
    <div className="flex items-center gap-4">
      <Button>
        <Link href="/dashboard" className="flex items-center gap-2">
          <Plus />
          Create Board
        </Link>
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Avatar className="h-9 w-9 cursor-pointer ring-2 ring-primary/20 transition-all hover:ring-primary/40">
            {/* <AvatarImage
              src="/placeholder.svg?height=36&width=36"
              alt={"user"}
            /> */}
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-semibold">
              {userInitials}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="relative w-56" align="end">
          <div className="flex items-center gap-2 p-2">
            <div className="flex flex-col">
              <span className="text-sm font-medium">{user.name}</span>
              <span className="text-xs text-muted-foreground">
                {user.email}
              </span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <Link href={"/dashboard"}>
            <DropdownMenuItem className="cursor-pointer">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <Link href={"/dashboard/settings"}>
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <SignOut />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
