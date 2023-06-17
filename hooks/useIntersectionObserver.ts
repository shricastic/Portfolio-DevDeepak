import { MutableRefObject, useEffect } from "react";

type UseIntersectionObserver = (
  ref: MutableRefObject<Element | null>,
  display: () => void,
  hide: () => void
) => void;

const useIntersectionObserver: UseIntersectionObserver = (
  ref,
  display,
  hide
) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        display();
      }

      if (!entries[0].isIntersecting) {
        hide();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, display, hide]);
};

export default useIntersectionObserver;
