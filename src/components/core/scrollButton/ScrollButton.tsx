import { FaArrowDown } from "react-icons/fa";

export const ScrollButton = () => {
  const scrollToContent = () => {
    const element = document.getElementById("content");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        onClick={scrollToContent}
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        <FaArrowDown className="text-2xl" />
      </button>
    </>
  );
};
