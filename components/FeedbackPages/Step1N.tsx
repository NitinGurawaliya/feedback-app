import { Step1NProps } from "@/interface"
import Navbar from "../common/Navbar"
import NegativeStep from "./NegativeStep"

const Step1N = ({ restaurant, onSubmit }: Step1NProps) =>{
    return <div>
        <Navbar restaurant={restaurant} />
        <NegativeStep onSubmit={onSubmit} />
    </div>
}

export default Step1N