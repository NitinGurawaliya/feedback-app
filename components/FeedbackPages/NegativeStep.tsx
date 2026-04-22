"use client";

import { useState } from "react";
import { NegativeStepProps } from "@/interface";
import { FeedbackTreeNode, NEGATIVE_FEEDBACK_TREE } from "@/constants";
import NegativeStepHeader from "./negative/NegativeStepHeader";
import NegativeOptionsList from "./negative/NegativeOptionsList";

const NegativeStep = ({ onSubmit, maxDepth = 3 }: NegativeStepProps) => {
  const [currentNodes, setCurrentNodes] = useState<FeedbackTreeNode[]>(
    NEGATIVE_FEEDBACK_TREE
  );
  const [selectedNodes, setSelectedNodes] = useState<FeedbackTreeNode[]>([]);

  const handleNodeSelect = (node: FeedbackTreeNode) => {
    const nextSelected = [...selectedNodes, node];
    setSelectedNodes(nextSelected);

    if (
      node.children &&
      node.children.length > 0 &&
      nextSelected.length < maxDepth
    ) {
      setCurrentNodes(node.children);
      return;
    }

    onSubmit?.({
      selectedPointIds: nextSelected.map((selectedNode) => selectedNode.id),
      selectedPoints: nextSelected.map((selectedNode) => selectedNode.label),
    });
  };

  return (
    <div className="flex flex-col bg-white max-w-3xl mx-auto">
      <div className="flex-1 overflow-y-auto px-5 pt-8 pb-28 space-y-8">
        <NegativeStepHeader />
        <NegativeOptionsList options={currentNodes} onSelect={handleNodeSelect} />
      </div>
    </div>
  );
};

export default NegativeStep;