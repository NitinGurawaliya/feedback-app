"use client";

import { Button } from "../ui/button";


const ReviewRedirect = () => {
  return (
    <div className="h-screen flex flex-col bg-white max-w-md mx-auto">
      
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center px-5 space-y-8">
        
        {/* Step Indicator */}
        <div className="flex justify-between items-center text-xs text-green-600 font-medium">
          <span>STEP 2 OF 3</span>
          <div className="flex gap-1">
            <div className="h-1 w-6 bg-green-500 rounded-full" />
            <div className="h-1 w-6 bg-green-500 rounded-full" />
            <div className="h-1 w-6 bg-gray-200 rounded-full" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            So glad you enjoyed it!
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your feedback makes our day. Would you mind sharing your experience with others?
          </p>
        </div>

        {/* Review Card */}
        <div className="border border-gray-200 rounded-2xl p-4 space-y-3 shadow-sm">
          
          {/* Header */}
          <div className="flex items-center justify-between">
            
            <div className="flex items-center gap-3">
              {/* Google Icon */}
              <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-semibold">
                G
              </div>

              <div>
                <p className="text-sm font-medium text-gray-900">
                  Zayka Grand
                </p>
                <div className="flex items-center gap-1 text-yellow-500 text-sm">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>
              </div>
            </div>

            <span className="text-xs text-gray-400">
              2 min
            </span>
          </div>

          {/* Review Text */}
          <p className="text-sm text-gray-500 italic">
            “The food was incredible and the service was so fast! Highly recommend the Butter Chicken.”
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-5 py-4 border-t bg-white space-y-3">
        
        <Button>
          Write a Google review
        </Button>

        {/* Optional Skip */}
        <button className="w-full text-sm text-gray-500">
          Skip for now
        </button>
      </div>
    </div>
  );
};

export default ReviewRedirect;