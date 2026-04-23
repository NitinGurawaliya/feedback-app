
import FeedbackFlow from "@/components/FeedbackPages/FeedbackFlow";
import { RestaurantDetails } from "@/interface";
import { Suspense } from "react";

interface Pageprops {
  params: Promise<{
    id: string;
  }>;
}

export default async function FeedbackPage({ params }: Pageprops) {
  return (
    <Suspense fallback={<FeedbackFlow restaurant={null} />}>
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
  } catch {
    restaurant = null;
  }

  return <FeedbackFlow restaurantId={id} restaurant={restaurant} />;
}