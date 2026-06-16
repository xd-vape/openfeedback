"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, SlidersHorizontal } from "lucide-react";
import { POSTS, STATUSES } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import FeedbackCard from "./FeedbackCard";

const STATUS_FILTERS = ["All", ...STATUSES];

export default function BoardPageClient({ board }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sort, setSort] = useState("top");

  const filtered = useMemo(() => {
    let list = POSTS;
    if (statusFilter !== "All") {
      list = list.filter((p) => p.status === statusFilter);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q),
      );
    }
    if (sort === "top") list = [...list].sort((a, b) => b.votes - a.votes);
    else if (sort === "newest")
      list = [...list].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
      );
    else if (sort === "comments")
      list = [...list].sort((a, b) => b.comments - a.comments);
    return list;
  }, [search, statusFilter, sort]);

  console.log(board);

  return (
    <>
      <header className="bg-accent border-b border-border">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-row py-3 border-b border-border">
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
                {board.name}
              </h1>

              <p className="text-muted-foreground mt-2 text-sm leading-relaxed max-w-xl text-pretty">
                {board.description}
              </p>
            </div>

            {/* <SubmitFeedbackDialog /> */}
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {STATUS_FILTERS.map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  statusFilter === status
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
                }`}
              >
                {status}
              </button>
            ))}
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-48 h-10 shrink-0">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue />
              </div>
            </SelectTrigger>

            <SelectContent
              position="popper"
              side="bottom"
              align="start"
              sideOffset={4}
            >
              <SelectItem value="top">Top Voted</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="comments">Most Commented</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <p className="font-medium text-foreground">No feedback found</p>
            <p className="text-sm text-muted-foreground mt-1">
              Try adjusting your filters or be the first to submit.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((post) => (
              <FeedbackCard key={post.id} post={post} board={board} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
