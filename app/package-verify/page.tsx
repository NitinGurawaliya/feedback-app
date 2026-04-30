import { Suspense } from "react";
import type { RestaurantDetails } from "../../packages/feedback/src";
import PackageVerifyClient from "./VerifyClient";

interface PackageVerifyPageProps {
  searchParams: Promise<{
    restaurantId?: string;
  }>;
}

export default async function PackageVerifyPage(props: PackageVerifyPageProps) {
  return (
    <Suspense fallback={<PackageVerifyClient restaurantId="demo-restaurant-id" restaurant={null} />}>
      <PackageVerifyContent searchParams={props.searchParams} />
    </Suspense>
  );
}

async function PackageVerifyContent({ searchParams }: PackageVerifyPageProps) {
  const { restaurantId: searchRestaurantId } = await searchParams;
  const restaurantId = searchRestaurantId ?? "1";
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
  let restaurant: RestaurantDetails | null = null;

  if (backendUrl) {
    try {
      const response = await fetch(
        `${backendUrl}/restaurant/details/${restaurantId}`,
        { cache: "no-store" }
      );

      if (response.ok) {
        const data = await response.json();
        restaurant = {
          id: restaurantId,
          name: data?.info?.restaurantName,
          logo: data?.info?.logo,
          location: data?.info?.location,
          googlePlacedId: data?.info?.googlePlacedId ?? null,
        };
      }
    } catch {
      restaurant = null;
    }
  }

  return <PackageVerifyClient restaurantId={restaurantId} restaurant={restaurant} />;
}
