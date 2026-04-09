import Navbar from "../common/Navbar";

interface ThankYouStepProps {
  restaurant?: {
    name?: string;
    logo?: string;
    location?: string;
  } | null;
}

const ThankYouStep = ({ restaurant }: ThankYouStepProps) => {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      <Navbar restaurant={restaurant} />
      <div className="px-5 pt-12 pb-10 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Thank you</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Your feedback has been submitted successfully. We appreciate your time and
          will use this to improve your next experience.
        </p>
      </div>
    </div>
  );
};

export default ThankYouStep;
