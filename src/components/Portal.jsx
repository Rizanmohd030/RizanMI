import { createPortal } from "react-dom";

/**
 * A simple Portal component that renders its children into document.body.
 * This helps avoid stacking context issues where fixed positioning
 * is trapped by parent transforms/filters.
 */
export default function Portal({ children }) {
    if (typeof document === "undefined") return null;
    return createPortal(children, document.body);
}
