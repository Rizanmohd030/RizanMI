"use client";

import { motion } from "framer-motion";
import React, { useMemo } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// Internal util function since setting up a whole lib folder might not be necessary
function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export const BoxesCore = ({ className, rows = 150, cols = 100 }) => {
    // Use vibrant primary/pastel colors that fit the light aesthetic
    const colors = [
        "rgba(255, 95, 86, 0.4)", // Red
        "rgba(255, 189, 46, 0.4)", // Yellow
        "rgba(39, 201, 63, 0.4)", // Green
        "rgba(0, 0, 0, 0.1)", // Subtle Black
    ];

    const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

    // A single box cell
    const BoxCell = React.memo(({ showPlus }) => (
        <motion.div
            // We removed the harsh slate borders for a cleaner look
            className="relative h-8 w-16 border-r border-t border-black/[0.03]"
            whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
            }}
            transition={{ duration: 2 }}
        >
            {/* We can keep the plus signs but make them very subtle */}
            {showPlus && (
                <svg
                    className="pointer-events-none absolute -left-[22px] -top-[14px] h-6 w-10 text-black/[0.05]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M12 6v12m6-6H6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </motion.div>
    ));

    BoxCell.displayName = "BoxCell";

    // A single row of boxes
    const BoxRow = React.memo(({ rowIndex, cols }) => (
        <div className="relative h-8 w-16 border-l border-black/[0.03]">
            {Array.from({ length: cols }).map((_, colIndex) => (
                <BoxCell key={colIndex} showPlus={rowIndex % 2 === 0 && colIndex % 2 === 0} />
            ))}
        </div>
    ));

    BoxRow.displayName = "BoxRow";

    // Memoize the entire grid
    const rowElements = useMemo(
        () =>
            Array.from({ length: rows }).map((_, rowIndex) => (
                <BoxRow key={rowIndex} rowIndex={rowIndex} cols={cols} />
            )),
        [rows, cols]
    );

    return (
        <div
            className={cn("pointer-events-auto absolute inset-0 z-0 flex", className)}
            style={{
                transform: "translate(-50%, -50%) skewX(-48deg) skewY(14deg) scale(0.675)",
                transformOrigin: "center center",
                top: "50%",
                left: "50%",
                width: "300vw",
                height: "300vh",
            }}
        >
            {rowElements}
        </div>
    );
};
