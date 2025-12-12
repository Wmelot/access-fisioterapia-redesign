import React from "react";

export const ManualTherapyIcon = ({ className }: { className?: string }) => {
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
            {/* Seated person */}
            <circle cx="15" cy="10" r="2.5" />
            <path d="M15 13c-2 0-3 1.5-3 4v3h3" />
            <path d="M15 20h3.5" />

            {/* Therapist */}
            <circle cx="10" cy="5" r="2.5" />
            <path d="M7 8.5c0 3 2.5 3 2.5 3" />
            <path d="M12.5 8.5c0 1.5-1 2.5-1 2.5" />
            <path d="M4 11c0 5 2 9 6 9" />
        </svg>
    );
};

// Trying to match the reference image: Standing figure massaging seated figure.
// Reference: Thick black lines. Therapist on left/back, Patient seated right/front.
export const ManualTherapyIconV2 = ({ className }: { className?: string }) => {
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
            {/* Therapist Head */}
            <circle cx="9" cy="5" r="2.5" />
            {/* Therapist Body/Arm reaching over */}
            <path d="M4 11s0 5 1 8 5 4 5 4" />
            <path d="M6 8c2-1 6-1 8 2" /> {/* Arm reaching */}

            {/* Patient Head */}
            <circle cx="17" cy="9" r="2.5" />
            {/* Patient Body seated */}
            <path d="M17 12v5a2 2 0 0 1-2 2h-2" />
        </svg>
    )
}

// Final polished version attempting to look like the uploaded icon
export const ManualTherapyIconFinal = ({ className }: { className?: string }) => {
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
            {/* Therapist (Left/Behind) */}
            <circle cx="8" cy="4" r="2.5" /> {/* Head */}
            <path d="M3 13c0-4 3-7 7-7 2 0 4 1 5 3" /> {/* Back/Arm curve */}
            <path d="M3 13v7" /> {/* Leg/Back down */}

            {/* Patient (Right/Front) */}
            <circle cx="18" cy="8" r="2.5" /> {/* Head */}
            <path d="M15 11h-1" /> {/* Shoulder/Neck connection */}
            <path d="M14 11v8a2 2 0 0 0 2 2h4" /> {/* Seated body/Leg */}
            <path d="M14 16h5" /> {/* Seat/Lap/Arm */}
        </svg>
    )
}

// Let's use a simpler, cleaner version that captures the essence of "Hands on Patient"
const ManualTherapy = ({ className }: { className?: string }) => (
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
        {/* Therapist standing behind */}
        <circle cx="9" cy="6" r="2" />
        <path d="M5 13a4 4 0 0 1 4-4h2" />
        <path d="M5 13v8" />

        {/* Patient receiving massage */}
        <circle cx="17" cy="11" r="2" />
        <path d="M15 14a3 3 0 0 0 3 3h2v4" />
        <path d="M14 21h6" />
    </svg>
)
