import { FeedbackTreeNode } from "@/constants";

interface NegativeOptionsListProps {
  options: FeedbackTreeNode[];
  onSelect: (node: FeedbackTreeNode) => void;
}

const NegativeOptionsList = ({ options, onSelect }: NegativeOptionsListProps) => {
  return (
    <div className="space-y-2">
      {options.map((node) => (
        <button
          key={node.id}
          type="button"
          onClick={() => onSelect(node)}
          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-50"
        >
          {node.label}
        </button>
      ))}
    </div>
  );
};

export default NegativeOptionsList;
