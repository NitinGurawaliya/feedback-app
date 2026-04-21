"use client";
import { useState } from "react";
import { feedbackOptions, foodTags } from "@/constants";
import { RatingProps } from "@/interface";

const Rating = ({ onSubmit,restaurant }: RatingProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [message, setMessage] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  const handleContinue = () => {
    if (selectedRating === null) {
      return;
    }

    onSubmit?.({
      rating: feedbackOptions[selectedRating].label,
      tags: selectedTags,
      message,
    });
  };

  return (
    <div className="h-full flex flex-col bg-white max-w-md lg:max-w-3xl mx-auto">
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-24 space-y-10">
        
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-700">
            How was your experience with {restaurant?.name}?
          </h2>
        </div>

        {/* Rating Options */}
        <div className="space-y-6">
          <div className="flex flex-col items-center gap-10 pt-2 lg:flex-row lg:justify-center lg:gap-6">
            {feedbackOptions.map((item, index) => (
              <button
                key={index}
                onClick={() => setSelectedRating(index)}
                className="flex w-24 flex-col items-center gap-2"
              >
                <div
                  className={`transition duration-200 ${
                    selectedRating === index ? "scale-110" : ""
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <span className="text-center text-[11px] leading-tight text-gray-600">
                  {item.label}  
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tags */}
        {/* <div className="space-y-4">
          <p className="text-sm font-semibold text-gray-700">
            What stood out today?
          </p>
          <div className="flex flex-wrap gap-2">
            {foodTags.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-2 text-xs rounded-full border transition
                    ${
                      active
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-900"
                    }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div> */}

        {/* Textarea */}
        {/* <div className="space-y-3">
          <p className="text-sm font-medium text-gray-800">
            Anything else you'd like to tell us?
          </p>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your visit..."
            className="w-full h-32 p-4 text-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none"
          />
        </div>


        <div className="px-5 py-2 bg-white">
        <button
          type="button"
          onClick={handleContinue}
          disabled={selectedRating === null}
          className={`w-full py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition
            ${
              selectedRating === null
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-900 text-white hover:opacity-90"
            }`}
        >
          Continue →
        </button>
      </div> */}
      </div>
    </div>
  );
};

export default Rating;

