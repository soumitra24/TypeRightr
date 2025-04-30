import React from 'react';

// This component only displays the countdown and the fixed multiplayer time (30s).
// Props:
// - countDown: The current remaining time.
// - selectedTime: The fixed time for the match (always 30).
export default function MultiplayerUpperMenu({ countDown, selectedTime }) {

    // <<< Add console log to check received props >>>
    console.log("[MultiplayerUpperMenu] Received props - countDown:", countDown, "selectedTime:", selectedTime);

    // Style for the single, visible time button (always 30s)
    const timeButtonStyle = {
        opacity: 1, // Always visible
        pointerEvents: 'none', // Not interactive
        margin: '0 5px',
        borderColor: 'lightblue', // Highlighted
        borderWidth: '2px',
        cursor: 'default', // Default cursor
    };

    // Determine what to display in the timer div
    // <<< Add check for undefined/null props >>>
    let timerDisplay;
    if (countDown === undefined || countDown === null || selectedTime === undefined || selectedTime === null) {
        console.warn("[MultiplayerUpperMenu] Received undefined/null props for countDown or selectedTime.");
        timerDisplay = '...'; // Display a placeholder if props are invalid
    } else {
        // If countDown equals selectedTime, it means the timer hasn't started yet.
        timerDisplay = countDown === selectedTime ? '30s' : `${countDown}s`;
    }


    return (
        <div className="upper-menu" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            {/* Display 's' initially, then the countdown, or '...' if props invalid */}
            <div className="timer" title={`Match Time: ${selectedTime ?? 'N/A'}s`}>{timerDisplay}</div>

            {/* Group time buttons - Only show 30s */}
            <div className="time-buttons">
                 {/* Render only the 30s button, styled as selected and disabled */}
                 <button
                    key={30}
                    className="timer-button"
                    style={timeButtonStyle}
                    disabled={true}
                >
                    {/* Use nullish coalescing for safety */}
                    {selectedTime ?? 30}s
                </button>
            </div>

            {/* No Switch Mode button needed here */}
        </div>
    );
}