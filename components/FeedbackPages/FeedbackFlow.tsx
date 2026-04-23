"use client";

import { useEffect, useRef, useState } from "react";
import { Step1 } from "./Step1";
import Step1N from "./Step1N";
import ThankYouStep from "./ThankYouStep";
import { FeedbackFlowProps, NegativeFeedbackSubmissionPayload } from "@/interface";
import axios from "axios";


type CurrentStep = "step1" | "step1A" | "step1Top" | "thankyou";

const FeedbackFlow = ({ restaurantId, restaurant }: FeedbackFlowProps) => {
  const [currentStep, setCurrentStep] = useState<CurrentStep>("step1");
  const [renderedStep, setRenderedStep] = useState<CurrentStep>("step1");
  const [transitionState, setTransitionState] = useState<"in" | "out">("in");
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [feedbackId, setFeedbackId] = useState<string | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (currentStep === renderedStep) {
      return;
    }

    setTransitionState("out");

    transitionTimeoutRef.current = setTimeout(() => {
      setRenderedStep(currentStep);
      setTransitionState("in");
    }, 220);

    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, [currentStep, renderedStep]);

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

  const handleNegativeSubmit = (
    payload: NegativeFeedbackSubmissionPayload
  ) => {
    // Do not block UX on API completion.
    setCurrentStep("thankyou");

    void axios
      .post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/feedback/${restaurantId}`, {
        rating: selectedRating,
        selectedPoints: payload.selectedPoints,
        selectedPointIds: payload.selectedPointIds,
      })
      .then((response) => {
        const receivedFeedbackId = response.data?.feedbackId;
        if (receivedFeedbackId) {
          setFeedbackId(String(receivedFeedbackId));
        }
      })
      .catch(() => {
        // Ignore network errors so the user can continue.
      });
  };

  return (
    <div
      className="relative"
      data-restaurant-id={restaurant?.id ?? restaurantId ?? ""}
    >
      <div
        className={`transition-all duration-280 ease-in-out ${
          transitionState === "in"
            ? "opacity-100 translate-y-0 scale-100 blur-0"
            : "opacity-0 translate-y-2 scale-[0.985] blur-[1.5px] pointer-events-none"
        }`}
      >
      {renderedStep === "step1" && (
        <Step1 restaurant={restaurant} onSubmit={handleStep1Submit} />
      )}
      {renderedStep === "step1A" && (
        <Step1N restaurant={restaurant} onSubmit={handleNegativeSubmit} maxDepth={3} />
      )}
      {renderedStep === "step1Top" && (
        <Step1N restaurant={restaurant} onSubmit={handleNegativeSubmit} maxDepth={1} />
      )}
      {renderedStep === "thankyou" && (
        <ThankYouStep
          restaurant={restaurant}
          rating={selectedRating}
          feedbackId={feedbackId}
        />
      )}
      </div>
    </div>
  );
};

export default FeedbackFlow;
