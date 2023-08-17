"use client";
import { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <div className="scroll-top">
      <button
        className={`scroll-btn hidden-${!isVisible}`}
        onClick={scrollToTop}
      >
        <RiArrowUpSLine />
      </button>
    </div>
  );
};

export default Scroll;
