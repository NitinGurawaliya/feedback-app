import Input from "@/components/common/Input";

interface NegativeDetailsFormProps {
  feedback: string;
  phone: string;
  name: string;
  onFeedbackChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
  onNameChange: (value: string) => void;
}

const NegativeDetailsForm = ({
  feedback,
  phone,
  name,
  onFeedbackChange,
  onPhoneChange,
  onNameChange,
}: NegativeDetailsFormProps) => {
  return (
    <div className="space-y-5">
      <Input
        label="Detailed Feedback"
        placeholder="What could we have done better?"
        value={feedback}
        onChange={(e) => onFeedbackChange(e.target.value)}
        textarea
      />

      <Input
        label="Phone number (for follow-up)"
        placeholder="+91 00000 00000"
        value={phone}
        onChange={(e) => onPhoneChange(e.target.value)}
      />

      <Input
        label="Name (Optional)"
        placeholder="Your name"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <p className="text-xs text-gray-400 text-center leading-relaxed px-2">
        Your privacy matters. We only use these details to resolve your concern.
      </p>
    </div>
  );
};

export default NegativeDetailsForm;
