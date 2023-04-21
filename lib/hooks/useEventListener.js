/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
import { useEffect, useRef } from "react";
/**
 * useEventListener
 * Hook for handling EventListeners
 * @return {object} width, height
 */
export function useEventListener(eventName, handler) {
  // Create a ref that stores handler
  const savedHandler = useRef();
  // Update ref.current value if handler changes.
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(
    () => {
      const element = document;
      // Make sure element supports addEventListener
      const isSupported = element && element.addEventListener;
      if (!isSupported) return;

      // Create event listener that calls handler function stored in ref
      const eventListener = (event) => savedHandler.current(event);

      // Add event listener
      element.addEventListener(eventName, eventListener);

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener);
      };
    },
    [eventName] // Re-run if eventName or element changes
  );
}
