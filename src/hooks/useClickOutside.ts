import { useEffect, useRef } from "react";

export function useClickOutside(handler: () => void, listeningCapture = true) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }
    document.addEventListener("click", handleClick, listeningCapture);

    return () =>
      document.removeEventListener("click", handleClick, listeningCapture);
  }, [handler, listeningCapture]);

  return ref;
}
