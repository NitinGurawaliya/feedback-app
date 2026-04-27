"use client";

import { useState } from "react";
import { FeedbackDashboard } from "@nitin201/reviews-dashboard-component";

type Range = "week" | "month" | "year";

export default function FeedbackDashboardView({ restaurantId }: { restaurantId: number }) {
  const [timeRange, setTimeRange] = useState<Range>("week");

  return (
    <FeedbackDashboard
    backendUrl={process.env.NEXT_PUBLIC_BACKEND_URL ||""}
      mode="zayka"
      restaurantId={restaurantId}
      timeRange={timeRange}
      onTimeRangeChange={(range: string) => {
        if (range === "week" || range === "month" || range === "year") {
          setTimeRange(range);
        }
      }}
    />
  );
}