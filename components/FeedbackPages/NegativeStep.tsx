"use client";

import { useState } from "react";
import Input from "../common/Input";
import { NegativeStepProps } from "@/interface";

const NegativeStep = ({ onSubmit }: NegativeStepProps) => {
  const [feedback, setFeedback] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const isFeedbackEmpty = feedback.trim() === "";

  const handleContinue = () => {
    if (isFeedbackEmpty) {
      return;
    }

    onSubmit?.({
      feedback: feedback.trim(),
      phone: phone.trim(),
      name: name.trim(),
    });
  };

  return (
    <div className=" flex flex-col bg-white max-w-md mx-auto">
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-28 space-y-8">


        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            We're listening
          </h2>
          <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
            We're sorry we missed the mark. Your feedback helps us fix things right away.
          </p>
        </div>

        {/* Detailed Feedback */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-800">
            Detailed Feedback
          </p>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="What could we have done better? Be as specific as you'd like."
            className="w-full h-32 p-4 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />
        </div>

        {/* Phone */}
        <Input
          label="Phone number (for follow-up)"
          placeholder="+91 00000 00000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Name */}
        <Input
          label="Name (Optional)"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Skip */}
        <div className="text-center text-sm text-gray-500">
          Skip – submit anonymously
        </div>

        {/* Privacy */}
        <p className="text-xs text-gray-400 text-center leading-relaxed px-2">
          Your privacy matters. Your phone number is only shared with the restaurant
          management team to resolve your concern.
        </p>
            <div className="px-5 py-4  bg-white">
        <button
          type="button"
          onClick={handleContinue}
          disabled={isFeedbackEmpty}
          className={`w-full py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition
            ${
              isFeedbackEmpty
                ? "bg-white text-gray-400 border border-gray-200 cursor-not-allowed"
                : "bg-gray-900 text-white hover:opacity-90"
            }`}
        >
          Continue →
        </button>
      </div>
      </div>

    </div>
  );
};

export default NegativeStep;