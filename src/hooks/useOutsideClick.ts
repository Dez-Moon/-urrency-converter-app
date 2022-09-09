import { useEffect } from "react";
import { useLatest } from "./useLatest";

export const useOutsideClick = (
  elementRef: any,
  handler: any,
  attached: any = true
) => {
  const latestHandler = useLatest(handler);

  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: any) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        latestHandler.current();
      }
    };
    console.log(1);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [elementRef, latestHandler, attached]);
};
