import Navbar from "../common/Navbar"
import Rating, { FeedbackRating } from "../common/Rating"

interface Step1Props {
    restaurant?: {
        name?: string;
        logo?: string;
        location?: string;
    } | null;
    onSubmit?: (payload: {
        rating: FeedbackRating;
        tags: string[];
        message: string;
    }) => void;
}

export const Step1 = ({ restaurant, onSubmit }: Step1Props)=>{
    return <div>
        <Navbar restaurant={restaurant} />
        <Rating onSubmit={onSubmit} />
    </div>
}