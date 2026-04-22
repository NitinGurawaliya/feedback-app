import Navbar from "../common/Navbar";

interface ThankYouStepProps {
  restaurant?: {
    name?: string;
    logo?: string;
    location?: string;
  } | null;
  finalNote: string;
  onFinalNoteChange: (value: string) => void;
}

const ThankYouStep = ({
  restaurant,
  finalNote,
  onFinalNoteChange,
}: ThankYouStepProps) => {
  return (
    <div className="min-h-screen bg-white max-w-md mx-auto">
      <Navbar restaurant={restaurant} />
      <div className="px-5 pt-12 pb-10 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Thank you</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Your feedback has been submitted successfully. We appreciate your time and
          will use this to improve your next experience.
        </p>

        <div className="space-y-2 text-left">
          <label className="text-sm font-medium text-gray-800">
            Anything else you want to add?
          </label>
          <input
            value={finalNote}
            onChange={(e) => onFinalNoteChange(e.target.value)}
            placeholder="Optional final note"
            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ThankYouStep;
