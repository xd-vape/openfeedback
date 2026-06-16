import { STATUS_STYLES } from "@/lib/data";
import React from "react";
import { Badge } from "../ui/badge";

export default function StatusBadge({ status }) {
  const cls = STATUS_STYLES[status] || "bg-gray-100 text-gray-600";
  return (
    <Badge variant="outline" className={cls}>
      {status}
    </Badge>
  );
}
