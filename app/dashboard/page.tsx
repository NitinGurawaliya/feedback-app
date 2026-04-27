import { cookies } from "next/headers";
import FeedbackDashboardView from "@/components/dashboard/FeedbackDashboardView";

// async function getRestaurantId() {
//   const cookieHeader = cookies().toString();
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard`, {
//     headers: { Cookie: cookieHeader },
//     credentials: "include",
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Failed to load dashboard");
//   const data = await res.json();
//   return data.restaurant.id as number;
// }

export default async function DashboardPage() {
//   const restaurantId = await getRestaurantId();

  return (
    <main className="min-h-screen">
      <FeedbackDashboardView restaurantId={1} />
    </main>
  );
}