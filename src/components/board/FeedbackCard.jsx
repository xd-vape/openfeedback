"use client";
import { ChevronUp, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import StatusBadge from "./StatusBadge";

export default function FeedbackCard({ post, board }) {
  const [votes, setVotes] = useState(0);
  const [voted, setVoted] = useState(false);

  function handleUpvote(e) {
    e.preventDefault();

    if (voted) {
      setVotes((v) => v - 1);
    } else {
      setVotes((v) => v + 1);
    }
    setVoted((v) => !v);
  }

  return (
    <Link
      href="/feedback/1"
      className="flex items-start gap-4 bg-card border border-border rounded-lg p-4 hover:border-primary/40 hover:shadow-sm transition-all group"
    >
      <button
        onClick={handleUpvote}
        aria-label={voted ? "Remove vote" : "Upvote"}
        className={`flex flex-col items-center justify-center min-w-13 h-14 rounded-lg border transition-colors text-sm font-semibold ${
          voted
            ? "bg-primary text-primary-foreground border-primary"
            : "bg-background border-border text-muted-foreground hover:border-primary hover:text-primary"
        }`}
      >
        <ChevronUp className="h-4 w-4" />
        <span>{votes}</span>
      </button>
      <div className="flex-1">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h3 className="text-lg font-semibold text-foreground">
            {post.title}
          </h3>
          <StatusBadge status={post.status} />
        </div>

        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
          {post.description}
        </p>

        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <MessageSquare className="h-3.5 w-3.5" />
            {post.comments} comments
          </span>
          <span>{post.createdAt}</span>
        </div>
      </div>
    </Link>
  );
}
