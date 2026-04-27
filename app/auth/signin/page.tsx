
import { Suspense } from "react";
import {Signin} from "@nitin201/zayka-auth"
export default function SigninComp(){
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-white dark:bg-gray-900 flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        }>
            <Signin redirectUrl="/dashboard" backendUrl={process.env.NEXT_PUBLIC_BACKEND_URL ||""}
              
             />
        </Suspense>
    );
}