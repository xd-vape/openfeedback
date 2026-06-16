"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Globe } from "lucide-react";

export default function HomeClient({ boards }) {
  return (
    <div>
      {boards.length > 0 && (
        <>
          <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
            Public Boards ({boards.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {boards.map((board) => (
              <Link
                key={board.id}
                href={`/board/${board.slug}`}
                className="group block"
              >
                <Card className="h-full transition-colors hover:border-primary/50 hover:bg-muted/30">
                  <CardContent className="p-5 flex flex-col h-full">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1 mb-2">
                        {board.name}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {board.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span>{board.postsCount} posts</span>

                      <Badge
                        variant="outline"
                        className="text-xs bg-green-300/20 border-green-300/50"
                      >
                        <Globe className="h-3 w-3 mr-1 " />
                        Public
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </>
      )}

      {boards.length === 0 && (
        <div className="py-12">
          <p className="text-muted-foreground">
            No public boards available. Create your own board to start gathering
          </p>
        </div>
      )}
    </div>
  );
}
