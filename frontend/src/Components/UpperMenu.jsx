import { useState } from 'react';
import { useTestMode } from "../Context/TestTimerContext";

export default function UpperMenu({ countDown, testStart, focusInput }) {
    const { setTestTime } = useTestMode();
    const [buttonsVisible, setButtonsVisible] = useState(true);

    const updateTime = (e) => {
        setTestTime(Number(e.target.id));
    };

    const buttonStyle = {
        transition: 'all 0.5s ease',
        opacity: !testStart && buttonsVisible ? 1 : 0,
        transform: !testStart && buttonsVisible ? 'translateX(0) scale(1)' : 'translateX(100px) scale(0.9)',
        pointerEvents: !testStart && buttonsVisible ? 'auto' : 'none'
    };
    

    return (
        <div className="upper-menu">
            <div className="timer">{countDown}s</div>
            {buttonsVisible && (
                <>
                    <button 
                        className="timer-button"
                        id={30}
                        onClick={updateTime}
                        style={buttonStyle}
                    >
                        30s
                    </button>    
                    <button 
                        className="timer-button"
                        id={60}
                        onClick={updateTime}
                        style={buttonStyle}
                    >
                        60s
                    </button>  
                </>
            )}

        </div>
    );
}

