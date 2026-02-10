import { useEffect } from "react";

/**
 * Hook to lock body scroll when a modal or menu is open.
 * @param lock Whether to lock the scroll.
 */
export const useScrollLock = (lock: boolean) => {
    useEffect(() => {
        if (lock) {
            // Save current scroll position and set overflow hidden
            const scrollY = window.scrollY;
            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflowY = "hidden";
        } else {
            // Restore scroll position and remove styles
            const scrollY = document.body.style.top;
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.body.style.overflowY = "";
            if (scrollY) {
                window.scrollTo(0, parseInt(scrollY || "0") * -1);
            }
        }

        return () => {
            // Cleanup on unmount
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.body.style.overflowY = "";
        };
    }, [lock]);
};
