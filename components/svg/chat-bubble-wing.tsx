const ChatBubbleWing = ({
  className,
  pathClassName,
}: {
  className?: string;
  pathClassName?: string;
}) => (
  <svg
    className={`${className || ""}`}
    height="37"
    width="26"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={`${pathClassName || ""}`}
      d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
    />
  </svg>
);

export default ChatBubbleWing;
