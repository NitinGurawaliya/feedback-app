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

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center overflow-hidden px-3 pt-3 sm:px-4 sm:pt-4"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)" }}
    >
      <button
        type="button"
        aria-label="Dismiss bottom sheet"
        onClick={onDismiss}
        className={`absolute inset-0 bg-black/45 transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-240 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="max-h-[min(78svh,640px)] overflow-y-auto overscroll-contain p-4 sm:max-h-[min(82svh,680px)] sm:p-5" style={{ paddingBottom: "max(env(safe-area-inset-bottom), 1rem)" }}>
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-gray-200" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default FeedbackBottomSheet;
