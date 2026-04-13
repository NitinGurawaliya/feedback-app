import { feedbackOptions } from "@/constants";

export type FeedbackRating = (typeof feedbackOptions)[number]["label"];

export interface RestaurantDetails {
  id?: string | number;
  name?: string;
  logo:string
  location:string
}

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

export interface NavbarProps {
  restaurant?: {
    name?: string;
    logo?: string;
    location?: string;
  } | null;
}


export type InputProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
};

export interface FeedbackFlowProps {
  restaurantId?: string;
  restaurant?: {
    id?: string | number;
    name?: string;
    logo?: string;
    location?: string;
  } | null;
}

export interface Step1Props {
    restaurant?: {
        name?: string;
        logo?: string;
        location?: string;
    } | null;
    onSubmit?: (payload: {
        rating: FeedbackRating;
        tags: string[];
        message: string;
    }) => void;
}

export interface Step1NProps {
    restaurant?: {
        name?: string;
        logo?: string;
        location?: string;
    } | null;
    onSubmit?: (payload: {
        feedback: string;
        phone: string;
        name: string;
    }) => void;
}