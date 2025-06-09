import { useEffect } from "react";

export default function useObserver(selector = ".hidden", classToAdd = "show") {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classToAdd);
        } else {
          entry.target.classList.remove(classToAdd);
        }
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector, classToAdd]); 
}
