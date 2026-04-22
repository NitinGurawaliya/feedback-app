"use client";

import { useState } from "react";
import { Step1 } from "./Step1";
import Step1N from "./Step1N";
import ThankYouStep from "./ThankYouStep";
import { FeedbackFlowProps, NegativeFeedbackSubmissionPayload } from "@/interface";
import axios from "axios";


type CurrentStep = "step1" | "step1A" | "step1Top" | "thankyou";

const FeedbackFlow = ({ restaurantId, restaurant }: FeedbackFlowProps) => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>("step1");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedPointIds, setSelectedPointIds] = useState<string[]>([]);
  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);

  const handleStep1Submit = (payload: {
    rating: number;
  }) => {
    setSelectedRating(payload.rating);
    const isNegative = payload.rating <= 3;

    if (isNegative) {
      return setCurrentStep("step1A");
    }

    setCurrentStep("step1Top");
  };

  const handleNegativeSubmit = (payload: NegativeFeedbackSubmissionPayload) => {
    setSelectedPointIds(payload.selectedPointIds);
    setSelectedPoints(payload.selectedPoints);
    setCurrentStep("thankyou");
  };

  const handleFinalSubmit = (payload: { feedback: string; phone: string }) => {
    void axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/feedback/${restaurantId}`, {
        rating: selectedRating,
        selectedPoints,
        selectedPointIds,
        feedback: payload.feedback,
        phone: payload.phone,
        restaurantId,
      })
      .catch(() => {
        // Ignore network errors so the UI remains instant.
      });
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
        <Step1N restaurant={restaurant} onSubmit={handleNegativeSubmit} maxDepth={3} />
      )}
      {currentStep === "step1Top" && (
        <Step1N restaurant={restaurant} onSubmit={handleNegativeSubmit} maxDepth={1} />
      )}
      {currentStep === "thankyou" && (
        <ThankYouStep
          restaurant={restaurant}
          onSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
};

export default FeedbackFlow;
