import Navbar from "../common/Navbar"
import Rating from "../common/Rating"
import { FeedbackRating, Step1Props } from "@/interface";

export const Step1 = ({ restaurant, onSubmit }: Step1Props)=>{
    return <div>
        <Navbar restaurant={restaurant} />
        <Rating restaurant={restaurant ?? null} onSubmit={onSubmit} />
    </div>
}