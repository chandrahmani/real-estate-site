import { useEffect, useState } from "react";

export const ScrollToTopButton = () => {
  const [isVisible, setIsvisible] = useState<boolean>(false);

  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsvisible(true);
    } else {
      setIsvisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);
  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span className="text-xl">&uarr;</span>
      </button>
    </>
  );
};
