import type { RestaurantDetails } from "../../../packages/feedback/src";
import PackageFeedbackClient from "./PackageFeedbackClient";
import { Suspense } from "react";

interface Pageprops {
  params: Promise<{
    id: string;
  }>;
}

export default async function FeedbackPage({ params }: Pageprops) {
  return (
    <Suspense fallback={<PackageFeedbackClient restaurantId="demo-restaurant-id" restaurant={null} />}>
      <FeedbackContent params={params} />
    </Suspense>
  );
}

async function FeedbackContent({ params }: Pageprops) {
  const { id } = await params;
  let restaurant: RestaurantDetails | null = null;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/restaurant/details/${id}`,
      { cache: "no-store" }
    );

    console.log(response);

    if (response.ok) {
      const data = await response.json();
      restaurant = {
        id,
        name: data?.info?.restaurantName,
        logo: data?.info?.logo,
        location: data?.info?.location,
        googlePlacedId: data?.info?.googlePlacedId ?? data?.info?.googlePlacedId ?? null,
      };
    }
  } catch (error) {
    restaurant = null;
    console.log(restaurant);
    console.log("error",error);
  }

  return <PackageFeedbackClient restaurantId={id} restaurant={restaurant} />;
}