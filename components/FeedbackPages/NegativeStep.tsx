"use client";

import { useState } from "react";
import { NegativeStepProps } from "@/interface";
import { FeedbackTreeNode, NEGATIVE_FEEDBACK_TREE } from "@/constants";
import NegativeStepHeader from "./negative/NegativeStepHeader";
import NegativeOptionsList from "./negative/NegativeOptionsList";
import NegativeDetailsForm from "./negative/NegativeDetailsForm";
import NegativeStepActions from "./negative/NegativeStepActions";

const NegativeStep = ({ onSubmit }: NegativeStepProps) => {
  const [currentNodes, setCurrentNodes] = useState<FeedbackTreeNode[]>(
    NEGATIVE_FEEDBACK_TREE
  );
  const [selectedNodes, setSelectedNodes] = useState<FeedbackTreeNode[]>([]);
  const [feedback, setFeedback] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isFinalStep, setIsFinalStep] = useState(false);
  const isFeedbackEmpty = feedback.trim() === "";

  const handleNodeSelect = (node: FeedbackTreeNode) => {
    const nextSelected = [...selectedNodes, node];
    setSelectedNodes(nextSelected);

    if (node.children && node.children.length > 0 && nextSelected.length < 3) {
      setCurrentNodes(node.children);
      return;
    }

    setIsFinalStep(true);
  };

  const handleBack = () => {
    if (isFinalStep) {
      setIsFinalStep(false);
    }

    const nextSelected = selectedNodes.slice(0, -1);
    setSelectedNodes(nextSelected);

    if (nextSelected.length === 0) {
      setCurrentNodes(NEGATIVE_FEEDBACK_TREE);
      return;
    }

    const lastSelected = nextSelected[nextSelected.length - 1];
    setCurrentNodes(lastSelected.children ?? NEGATIVE_FEEDBACK_TREE);
  };

  const handleContinue = () => {
    if (isFeedbackEmpty) {
      return;
    }

    onSubmit?.({
      selectedPointIds: selectedNodes.map((node) => node.id),
      selectedPoints: selectedNodes.map((node) => node.label),
      feedback: feedback.trim(),
      phone: phone.trim(),
      name: name.trim(),
    });
  };

  return (
    <div className=" flex flex-col bg-white max-w-md mx-auto">
      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-28 space-y-8">
        <NegativeStepHeader />

        {!isFinalStep && (
          <NegativeOptionsList options={currentNodes} onSelect={handleNodeSelect} />
        )}

        {isFinalStep && (
          <NegativeDetailsForm
            feedback={feedback}
            phone={phone}
            name={name}
            onFeedbackChange={setFeedback}
            onPhoneChange={setPhone}
            onNameChange={setName}
          />
        )}

        <NegativeStepActions
          canGoBack={selectedNodes.length > 0}
          showContinue={isFinalStep}
          isContinueDisabled={isFeedbackEmpty}
          onBack={handleBack}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
};

export default NegativeStep;