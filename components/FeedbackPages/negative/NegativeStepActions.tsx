interface NegativeStepActionsProps {
  canGoBack: boolean;
  showContinue: boolean;
  isContinueDisabled: boolean;
  onBack: () => void;
  onContinue: () => void;
}

const NegativeStepActions = ({
  canGoBack,
  showContinue,
  isContinueDisabled,
  onBack,
  onContinue,
}: NegativeStepActionsProps) => {
  return (
    <div className="px-5 py-4 bg-white space-y-2">
      {canGoBack && (
        <button
          type="button"
          onClick={onBack}
          className="w-full py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-700"
        >
          Back
        </button>
      )}
      {showContinue && (
        <button
          type="button"
          onClick={onContinue}
          disabled={isContinueDisabled}
          className={`w-full py-3.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 transition ${
            isContinueDisabled
              ? "bg-white text-gray-400 border border-gray-200 cursor-not-allowed"
              : "bg-gray-900 text-white hover:opacity-90"
          }`}
        >
          Continue →
        </button>
      )}
    </div>
  );
};

export default NegativeStepActions;
