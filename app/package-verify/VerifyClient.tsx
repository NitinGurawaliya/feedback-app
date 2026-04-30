"use client";

import {
  FeedbackWidget,
  createFeedbackClient,
  type RestaurantDetails,
} from "../../packages/feedback/src";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

const client = createFeedbackClient({
  baseUrl: backendUrl,
});

interface PackageVerifyClientProps {
  restaurantId: string;
  restaurant: RestaurantDetails | null;
}

export default function PackageVerifyClient({
  restaurantId,
  restaurant,
}: PackageVerifyClientProps) {
  if (!backendUrl) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-white px-4">
        <p className="text-sm text-red-600">
          NEXT_PUBLIC_BACKEND_URL is missing. Add it to test the package flow.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <FeedbackWidget
        restaurantId={restaurantId}
        restaurant={restaurant}
        client={client}
        mode="fullPage"
        onError={(error) => {
          console.error("Feedback widget error:", error);
        }}
      />
    </main>
  );
}
