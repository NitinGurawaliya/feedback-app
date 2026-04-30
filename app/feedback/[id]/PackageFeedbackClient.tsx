"use client";

import {
  FeedbackWidget,
  createFeedbackClient,
  type RestaurantDetails,
} from "../../../packages/feedback/src";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

const client = createFeedbackClient({
  baseUrl: backendUrl,
});

interface PackageFeedbackClientProps {
  restaurantId: string;
  restaurant: RestaurantDetails | null;
}

export default function PackageFeedbackClient({
  restaurantId,
  restaurant,
}: PackageFeedbackClientProps) {
  return (
    <FeedbackWidget
      restaurantId={restaurantId}
      restaurant={restaurant}
      client={client}
      mode="fullPage"
      onError={(error) => {
        console.error("Feedback widget error:", error);
      }}
    />
  );
}
