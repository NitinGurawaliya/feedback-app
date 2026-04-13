
import { RestaurantDetails } from "@/interface";
import FeedbackFlow from "@/components/FeedbackPages/FeedbackFlow";
import { Suspense } from "react";

interface Pageprops {
  params: Promise<{
    id: string;
  }>;
}


async function FeedbackContent({ params }: Pageprops) {
  const { id } = await params;

  let restaurant: RestaurantDetails | null = null;

  try {
    const response = await fetch(
      `https://dineinn-tier2-iota.vercel.app/api/restaurant/details/${id}`,
      { cache: "no-store" }
    );
    
    if (response.ok) {
      
      const data = await response.json();
      restaurant = {
        id,
        name:data.info.restaurantName,
        logo:data.info.logo,
        location:data.info.location
      }

      console.log(restaurant)

    }
  } catch {
    restaurant = null;
  }
  return <FeedbackFlow restaurantId={id} restaurant={restaurant} />;
}

export default function FeedbackPage({ params }: Pageprops) {
  return (
    <Suspense fallback={<div>Loading feedback...</div>}>
      <FeedbackContent params={params} />
    </Suspense>
  );
}