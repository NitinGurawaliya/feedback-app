import Navbar from "../common/Navbar"
import NegativeStep from "./NegativeStep"

interface Step1NProps {
    restaurant?: {
        name?: string;
        logo?: string;
        location?: string;
    } | null;
    onSubmit?: (payload: {
        feedback: string;
        phone: string;
        name: string;
    }) => void;
}

const Step1N = ({ restaurant, onSubmit }: Step1NProps) =>{
    return <div>
        <Navbar restaurant={restaurant} />
        <NegativeStep onSubmit={onSubmit} />
    </div>
}

export default Step1N