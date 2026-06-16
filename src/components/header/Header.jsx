import { getServerSession } from "@/lib/auth/get-session";
import HeaderClient from "./header-client";

export default async function Header() {
  const session = await getServerSession();

  return <HeaderClient session={session} />;
}
