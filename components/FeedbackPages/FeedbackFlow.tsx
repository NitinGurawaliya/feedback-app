"use client";

import { useState } from "react";
import { Step1 } from "./Step1";
import Step1N from "./Step1A";
import ThankYouStep from "./ThankYouStep";
import { FeedbackRating } from "@/interface";

type CurrentStep = "step1" | "step1A" | "thankyou";

interface FeedbackFlowProps {
  restaurantId?: string;
  restaurant?: {
    id?: string | number;
    name?: string;
    logo?: string;
    location?: string;
  } | null;
}


const FeedbackFlow = ({ restaurantId, restaurant }: FeedbackFlowProps) => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>("step1");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleStep1Submit = (payload: {
    rating: FeedbackRating;
    tags: string[];
    message: string;
  }) => {
    const isPositive = payload.rating === "Good" || payload.rating === "Loved it";


    if (isPositive) {
      setIsReviewModalOpen(true);
      return;
    }

    setCurrentStep("step1A");
  };

  const handleNegativeSubmit = () => {
    setCurrentStep("thankyou");
  };

  const handleGoogleRedirect = () => {
    window.location.href = "https://www.google.com/maps";
  };

  return (
    <div
      className="relative"
      data-restaurant-id={restaurant?.id ?? restaurantId ?? ""}
    >
      {currentStep === "step1" && (
        <Step1 restaurant={restaurant} onSubmit={handleStep1Submit} />
      )}
      {currentStep === "step1A" && (
        <Step1N restaurant={restaurant} onSubmit={handleNegativeSubmit} />
      )}
      {currentStep === "thankyou" && <ThankYouStep restaurant={restaurant} />}

      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Awesome, thank you.</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              You selected a positive rating. Would you like to share your experience
              on Google?
            </p>

            <div className="space-y-2">
              <button
                type="button"
                onClick={handleGoogleRedirect}
                className="w-full py-3 rounded-xl bg-gray-900 text-white text-sm font-medium hover:opacity-90 transition"
              >
                Go to Google Review
              </button> 
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="w-full py-3 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium"
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackFlow;
