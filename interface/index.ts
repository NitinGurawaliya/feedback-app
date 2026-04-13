import { feedbackOptions } from "@/constants";

export type FeedbackRating = (typeof feedbackOptions)[number]["label"];

export interface RatingProps {
  onSubmit?: (payload: {
    rating: FeedbackRating;
    tags: string[];
    message: string;
  }) => void;
}
export interface NegativeStepProps {
  onSubmit?: (payload: {
    feedback: string;
    phone: string;
    name: string;
  }) => void;
}
