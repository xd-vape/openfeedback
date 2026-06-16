import BoardPageClient from "@/components/board/BoardPageClient";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { BOARDS, STATUSES } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const board = BOARDS.find((board) => board.slug === slug);

  // console.log(board);

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />

      {/* <header className="bg-accent border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-row py-3 border-b border-border ">
            <Link
              href="/"
              className="flex items-center p-1 gap-2 text-sm text-muted-foreground hover:text-primary rounded transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to boards
            </Link>
          </div>

          <div className="py-8 flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-semibold text-foreground text-balance">
                BOARD.nam
              </h1>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-xl text-pretty">
                BOARD.description
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8"></main> */}

      <BoardPageClient board={board} />

      <Footer />
    </div>
  );
}
