import AlgoInfo from "./AlgoInfo";

const SUPPORTED_ALGORITHIMS = [
  "For Loops",
  "Recursion",
  "Breadth First Search",
  "Depth First Search",
  "Neural Networks",
  "Binary Search",
];
const SUPPORTED_DATASTRUCTURES = [
  "Arrays",
  "Hashmaps",
  "Sets",
  "Linked Lists",
  "Stacks",
  "Graphs",
];
const SUPPORTED_TIME_COMPLEXITIES = [
  "O(log(n))",
  "O(n)",
  "O(nlog(n))",
  "O(n^x)",
  "O(x^2)",
  "O(n!)",
];
const GroupAlgosInfo = () => {
  return (
    <div className="flex flex-row flex-wrap py-5 px-40">
      <AlgoInfo title="For Loops" description="loopy doopy" />
    </div>
  );
};

export default GroupAlgosInfo;
