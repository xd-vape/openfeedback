import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} OpenFeedback. All rights reserved.
      </div>
    </footer>
  );
}
