"use client";

import { useState } from "react";
import { Step1 } from "./Step1";
import Step1N from "./Step1N";
import ThankYouStep from "./ThankYouStep";
import { FeedbackFlowProps, NegativeFeedbackSubmissionPayload } from "@/interface";
import axios from "axios";


type CurrentStep = "step1" | "step1A" | "thankyou";

const FeedbackFlow = ({ restaurantId, restaurant }: FeedbackFlowProps) => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>("step1");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [finalNote, setFinalNote] = useState("");

  const handleStep1Submit = (payload: {
    rating: number;
  }) => {
    setSelectedRating(payload.rating);
    const isNegative = payload.rating <= 3;

    if(isNegative){
      return  setCurrentStep("step1A");
    }

    void axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/feedback/${restaurantId}`, {
        rating: payload.rating,
        selectedPoints: [],
        selectedPointIds: [],
        feedback: "",
        phone: "",
        name: "",
        restaurantId,
      })
      .catch(() => {
        // Ignore network errors so the UI remains instant.
      });

    setCurrentStep("thankyou");
  };

  const handleNegativeSubmit = (payload: NegativeFeedbackSubmissionPayload) => {
    void axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/feedback/${restaurantId}`, {
        rating: selectedRating,
        selectedPoints: payload.selectedPoints,
        selectedPointIds: payload.selectedPointIds,
        feedback: payload.feedback,
        phone: payload.phone,
        name: payload.name,
        restaurantId,
      })
      .catch(() => {
        // Ignore network errors so the UI remains instant.
      });

    setCurrentStep("thankyou");
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
      {currentStep === "thankyou" && (
        <ThankYouStep
          restaurant={restaurant}
          finalNote={finalNote}
          onFinalNoteChange={setFinalNote}
        />
      )}
    </div>
  );
};

export default FeedbackFlow;
