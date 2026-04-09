import Navbar from "@/components/common/Navbar";
import { Step1 } from "@/components/FeedbackPages/Step1";
import axios from "axios";
import { Suspense } from "react";


interface Pageprops{
    params:Promise<{
        id:string
    }>
}

export default function FeedbackPage({ params }: Pageprops) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FeedbackContent params={params} />
    </Suspense>
  );
}


async function FeedbackContent({ params }:Pageprops) {
  const { id } = await params;

  const res = await axios.get("http://localhost:3001/api/restaurant/details/1")

  const data = res.data;

  console.log(data)



    return <div>
      <Step1 />
    </div>;
}