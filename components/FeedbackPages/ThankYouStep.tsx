"use client";

import { useState } from "react";
import Navbar from "../common/Navbar";
import Input from "../common/Input";

interface ThankYouStepProps {
  restaurant?: {
    name?: string;
    logo?: string;
    location?: string;
  } | null;
  onSubmit?: (payload: { feedback: string; phone: string }) => Promise<void> | void;
}

const ThankYouStep = ({ restaurant, onSubmit }: ThankYouStepProps) => {
  const [feedback, setFeedback] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isFormValid = feedback.trim() !== "" && phone.trim() !== "";

  const handleSubmit = () => {
    if (!isFormValid) {
      return;
    }
    onSubmit?.({
      feedback: feedback.trim(),
      phone: phone.trim(),
    });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      <Navbar restaurant={restaurant} />
      <div className="px-5 pt-12 pb-10 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Thank you</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          We appreciate your time and will use this to improve your next experience.
        </p>

        {!isSubmitted ? (
          <div className="space-y-4 text-left">
            <Input
              label="Detailed feedback"
              placeholder="Tell us what we can improve"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              textarea
            />
            <Input
              label="Mobile number"
              placeholder="+91 00000 00000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full rounded-xl px-4 py-3 text-sm font-medium text-white transition ${
                isFormValid
                  ? "bg-gray-900 hover:opacity-90"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        ) : (
          <p className="text-sm text-gray-600">
            Your response has been recorded. Thank you for sharing your feedback.
          </p>
        )}
      </div>
    </div>
  );
};

export default ThankYouStep;
