import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Globe, Search, Shield, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getPublicBoards } from "@/lib/db";
import HomeClient from "@/components/sections/HomeClient";

export default async function Home() {
  const boards = await getPublicBoards();

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container px-4 md:px-12 py-12 md:py-16">
          {/* Page Heading */}
          <div className="mt-22 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
              Find or create a feedback board
            </h1>
            <p className="text-base md:text-lg text-muted-foreground text-pretty">
              Browse public boards, submit ideas, vote on feedback, or create
              your own self-hosted board.
            </p>
          </div>

          <HomeClient boards={boards} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
