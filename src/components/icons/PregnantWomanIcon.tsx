import React from "react";

export const PregnantWomanIcon = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <circle cx="12" cy="5" r="2" />
            <path d="M10 22v-4h4v4" />
            <path d="M9 11a4 4 0 0 1 8 0c0 4-2 6-4 6s-4-2-4-6" />
            <path d="M12 11v4" />
        </svg>
    );
};
