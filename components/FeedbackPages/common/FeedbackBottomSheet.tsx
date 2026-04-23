"use client";

import { ReactNode, useEffect, useState } from "react";

interface FeedbackBottomSheetProps {
  isOpen: boolean;
  onDismiss: () => void;
  children: ReactNode;
}

const FeedbackBottomSheet = ({
  isOpen,
  onDismiss,
  children,
}: FeedbackBottomSheetProps) => {
  const [isMounted, setIsMounted] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const frameId = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(frameId);
    }

    setIsVisible(false);
    const timeoutId = setTimeout(() => setIsMounted(false), 240);
    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center px-4 pb-4">
      <button
        type="button"
        aria-label="Dismiss bottom sheet"
        onClick={onDismiss}
        className={`absolute inset-0 bg-black/45 transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl transition-all duration-240 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default FeedbackBottomSheet;
