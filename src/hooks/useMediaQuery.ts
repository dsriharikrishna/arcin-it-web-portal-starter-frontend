import { useState, useEffect } from "react";

/**
 * Custom hook to detect media query matches
 * @param query - CSS media query string (e.g., "(max-width: 768px)")
 * @returns boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check if window is defined (for SSR compatibility)
    if (typeof window === "undefined") {
      return;
    }

    const media = window.matchMedia(query);

    // Set initial value in a non-synchronous way to satisfy lint and avoid hydration mismatch
    const rafId = requestAnimationFrame(() => {
      setMatches(media.matches);
    });

    // Create event listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener (using both methods for browser compatibility)
    if (media.addEventListener) {
      media.addEventListener("change", listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
    }

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      if (media.removeEventListener) {
        media.removeEventListener("change", listener);
      } else {
        // Fallback for older browsers
        media.removeListener(listener);
      }
    };
  }, [query]);

  return matches;
}
