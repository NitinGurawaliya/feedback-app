"use client";
import { useState } from "react";
import { feedbackOptions } from "@/constants";
import { RatingProps } from "@/interface";

const Rating = ({ onSubmit,restaurant }: RatingProps) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleRatingSelect = (rating: number) => {
    setSelectedRating(rating);

    onSubmit?.({
      rating,
    });
  };

  return (
    <div className="h-full flex flex-col bg-white max-w-md lg:max-w-3xl mx-auto">
      
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-24 space-y-10">
        
        {/* Heading */}
        <div className="text-center space-y-0">
          <h2 className="text-xl font-semibold text-gray-700">
            How was your experience with {restaurant?.name}?
          </h2>
        </div>

        {/* Rating Options */}
        <div className="space-y-2">
          <div className="flex flex-col items-center gap-6 pt-2 lg:flex-row lg:justify-center lg:gap-6">
            {feedbackOptions.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleRatingSelect(item.rating)}
                className="flex w-24 flex-col items-center gap-2"
              >
                <div
                  className={`transition duration-200 ${
                    selectedRating === item.rating ? "scale-110" : ""
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.label}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <span className="text-center text-[11px] leading-tight text-gray-600">
                  {item.label}  
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;

