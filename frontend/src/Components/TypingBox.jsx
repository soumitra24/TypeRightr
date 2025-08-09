import React, { useState, useEffect, useRef, useMemo, createRef } from "react";
import Paragraphs from "./Paragraphs";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestTimerContext";
import Stats from "./Stats";
import { auth, db } from "../FirebaseConfig";
import { toast } from "react-toastify";

export default function TypingBox() {
    const inputRef = useRef(null);

    const getRandomParagraph = () => {
        const randomIndex = Math.floor(Math.random() * Paragraphs.length);
        return Paragraphs[randomIndex];
    };

    const { testTime } = useTestMode();
    const [wordsArray, setWordsArray] = useState(() => getRandomParagraph().split(' '));
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [countDown, setCountDown] = useState(testTime);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setInCorrectChars] = useState(0);
    const [missedChars, setMissedChars] = useState(0);
    const [extraChars, setExtraChars] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [graphData, setGraphData] = useState([]);

    // <<< Refs to hold latest stat values >>>
    const correctCharsRef = useRef(0);
    const incorrectCharsRef = useRef(0);
    const missedCharsRef = useRef(0);
    const extraCharsRef = useRef(0);
    const correctWordsRef = useRef(0);
    const currWordIndexRef = useRef(0);

    const wordSpanRef = useMemo(() => {
        return Array(wordsArray.length).fill(0).map(i => createRef(null));
    }, [wordsArray]);

    const handleUserInput = (e) => {
        const allCurrChars = wordSpanRef[currWordIndex].current.childNodes;
        
        if (e.keyCode === 18 || e.keyCode === 16 || e.keyCode === 20) {
            return;
        }
        if (!testStart) {
            startTimer();
            setTestStart(true);
        }

        if (e.keyCode === 32) { // Spacebar
            let correctCharsInWord = wordSpanRef[currWordIndex].current.querySelectorAll('.correct');

            if (correctCharsInWord.length === allCurrChars.length) {
                setCorrectWords(prev => { // Update ref
                    const newValue = prev + 1;
                    correctWordsRef.current = newValue;
                    return newValue;
                });
            }

            if (allCurrChars.length > currCharIndex) { // Check if there are missed chars
                 setMissedChars(prev => { // Update ref
                    const missedCount = allCurrChars.length - currCharIndex;
                    const newValue = prev + missedCount;
                    missedCharsRef.current = newValue;
                    return newValue;
                });
                allCurrChars[currCharIndex].classList.remove('char');
            }
            
            wordSpanRef[currWordIndex + 1].current.childNodes[0].className = 'char';
            setCurrWordIndex(prev => { // Update ref
                const newValue = prev + 1;
                currWordIndexRef.current = newValue;
                return newValue;
            });
            setCurrCharIndex(0);
            return;
        }

        if (e.keyCode === 8) { // Backspace
             if (currCharIndex > 0) { // Ensure we don't go below 0
                const charToRemove = allCurrChars[currCharIndex - 1]; // Get the char being removed

                if (charToRemove.className.includes('extra')) {
                    // ... (logic for removing extra char) ...
                     setExtraChars(prev => { // Update ref
                        const newValue = prev - 1;
                        extraCharsRef.current = newValue;
                        return newValue;
                    });
                } else {
                     if (charToRemove.className.includes('correct')) {
                        setCorrectChars(prev => { // Update ref
                            const newValue = prev - 1;
                            correctCharsRef.current = newValue;
                            return newValue;
                        });
                    } else if (charToRemove.className.includes('incorrect')) {
                        setInCorrectChars(prev => { // Update ref
                            const newValue = prev - 1;
                            incorrectCharsRef.current = newValue;
                            return newValue;
                        });
                    }
                    // Reset the character's class
                    allCurrChars[currCharIndex - 1].className = 'char';
                    if (currCharIndex < allCurrChars.length) {
                         allCurrChars[currCharIndex].className = ''; // Clear class of the next char
                    }
                }
                 setCurrCharIndex(prev => prev - 1);
            }
            return;
        }

        // --- Regular Character Typing ---
        if (currCharIndex === allCurrChars.length) { // Extra character
            let newSpan = document.createElement('span');
            newSpan.textContent = e.key;
            newSpan.className = 'incorrect extra char-right';
            allCurrChars[currCharIndex - 1].classList.remove('char-right');
            wordSpanRef[currWordIndex].current.append(newSpan);
            setExtraChars(prev => { // Update ref
                const newValue = prev + 1;
                extraCharsRef.current = newValue;
                return newValue;
            });
            setCurrCharIndex(prev => prev + 1); // Update state
            return;
        }

        // Typing within word bounds
        const expectedChar = allCurrChars[currCharIndex].innerText;
        if (e.key === expectedChar) {
            allCurrChars[currCharIndex].className = 'correct';
            setCorrectChars(prev => { // Update ref
                const newValue = prev + 1;
                correctCharsRef.current = newValue;
                return newValue;
            });
        } else {
            allCurrChars[currCharIndex].className = 'incorrect';
            setInCorrectChars(prev => { // Update ref
                const newValue = prev + 1;
                incorrectCharsRef.current = newValue;
                return newValue;
            });
        }

        // Cursor movement logic
        if (currCharIndex + 1 < allCurrChars.length) {
            allCurrChars[currCharIndex + 1].className = 'char'; // Set next char as current cursor position
        }
        allCurrChars[currCharIndex].classList.remove('char'); // Remove cursor from typed char

        setCurrCharIndex(prev => prev + 1); // Update state
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const startTimer = () => {
        const intervalID = setInterval(timer, 1000);
        // Reset graph data at the start of the timer
        setGraphData([]);
        // Ensure refs are reset if starting a new test without full reset
        correctCharsRef.current = 0;
        incorrectCharsRef.current = 0;
        missedCharsRef.current = 0;
        extraCharsRef.current = 0;
        correctWordsRef.current = 0;
        currWordIndexRef.current = 0;


        function timer() {
            setCountDown((c) => {
                // Update graph data using refs for accuracy within the interval
                const currentCorrectChars = correctCharsRef.current;
                const currentTimeElapsed = testTime - c + 1;
                const currentWPM = calculateWPM(currentCorrectChars, currentTimeElapsed); // Use function with ref value

                setGraphData((prevGraphData) => {
                     // Avoid adding duplicate time entries if interval runs slightly fast
                    if (prevGraphData.length > 0 && prevGraphData[prevGraphData.length - 1][0] === currentTimeElapsed) {
                        return prevGraphData;
                    }
                    return [...prevGraphData, [currentTimeElapsed, currentWPM]];
                });

                if (c === 1) {
                    clearInterval(intervalID);
                    setTestEnd(true);
                    // <<< Remove setTimeout and call saveResults directly >>>
                    saveResults();
                    return 0;
                }
                return c - 1;
            });
        }
    };

    const saveResults = () => {
        if (auth.currentUser) {
            const { uid } = auth.currentUser;

            // <<< Read final values from refs >>>
            const finalCorrectChars = correctCharsRef.current;
            const finalIncorrectChars = incorrectCharsRef.current;
            const finalMissedChars = missedCharsRef.current;
            const finalExtraChars = extraCharsRef.current;
            const finalCorrectWords = correctWordsRef.current;
            const finalCurrWordIndex = currWordIndexRef.current; // Use ref

            // <<< Pass ref values to calculation functions >>>
            const wpm = calculateWPM(finalCorrectChars, testTime);
            const accuracy = calculateAcc(finalCorrectWords, finalCurrWordIndex); // Use ref value

            console.log("Saving results with stats from refs:", {
                wpm, accuracy,
                correctChars: finalCorrectChars,
                incorrectChars: finalIncorrectChars,
                missedChars: finalMissedChars,
                extraChars: finalExtraChars,
                currWordIndex: finalCurrWordIndex
            });

            const resultData = {
                wpm, accuracy,
                correctChars: finalCorrectChars,
                incorrectChars: finalIncorrectChars,
                missedChars: finalMissedChars,
                extraChars: finalExtraChars,
                timeStamp: new Date(),
                characters: finalCorrectChars + finalIncorrectChars + finalMissedChars + finalExtraChars,
                testTime,
                userId: uid
            };

            if (finalCorrectChars > 0 || finalIncorrectChars > 0 || finalExtraChars > 0) { // Check refs
                db.collection('Results')
                    .add(resultData)
                    .then(() => {
                        console.log("Results saved successfully:", resultData);
                        toast.success("Result saved successfully!"); // Simplified toast message
                    })
                    .catch((err) => {
                        console.error("Error saving results:", err);
                        toast.error("Failed to save result"); // Simplified toast message
                    });
            } else {
                console.log("No significant typing activity detected (from refs), not saving results");
            }
        } else {
            console.log("User not logged in, results not saved");
        }
    };

    useEffect(() => {
        setCountDown(testTime);
    }, [testTime]);

    const resetGame = () => {
        setWordsArray(getRandomParagraph().split(' '));
        setCurrWordIndex(0);
        setCurrCharIndex(0);
        setCountDown(testTime);
        setTestStart(false);
        setTestEnd(false);
        setCorrectChars(0); correctCharsRef.current = 0; // Reset ref
        setInCorrectChars(0); incorrectCharsRef.current = 0; // Reset ref
        setMissedChars(0); missedCharsRef.current = 0; // Reset ref
        setExtraChars(0); extraCharsRef.current = 0; // Reset ref
        setCorrectWords(0); correctWordsRef.current = 0; // Reset ref
        setCurrWordIndex(0); currWordIndexRef.current = 0; // Reset ref
        setGraphData([]); // Reset graph data
        // Reset word spans visual state
        wordSpanRef.forEach(ref => {
            if (ref.current) {
                ref.current.childNodes.forEach(charSpan => {
                    charSpan.className = ''; // Clear all classes
                });
            }
        });
        // Set initial cursor
        if (wordSpanRef[0] && wordSpanRef[0].current) {
             wordSpanRef[0].current.childNodes[0].className = 'char';
        }
        focusInput();
    };

    // <<< Accept arguments >>>
    const calculateWPM = (correctCharsValue, timeValue) => {
        if (timeValue === 0 || correctCharsValue === 0) return 0;
        return Math.round(((correctCharsValue / 5) / (timeValue / 60)));
    };

    // <<< Accept arguments >>>
    const calculateAcc = (correctWordsValue, currWordIndexValue) => {
        if (currWordIndexValue === 0 || correctWordsValue === 0) { // Also check correctWordsValue
            return 0;
        }
        // Use the total words attempted (currWordIndexValue) for accuracy
        return Math.round(((correctWordsValue / currWordIndexValue) * 100));
    };

    useEffect(() => {
        focusInput();
        wordSpanRef[0].current.childNodes[0].className = 'char';
    }, []);

    return (
        <>
            <div className="container">
                <UpperMenu testStart={testStart} setTestStart={setTestStart} focusInput={focusInput} countDown={countDown} />
                {(testEnd) ? 
                    (<div className="reset">
                        {/* Pass calculated values using state (display might lag slightly behind refs) */}
                        {/* Or, for perfect consistency, calculate here using refs */}
                        <Stats wpm={calculateWPM(correctCharsRef.current, testTime)}
                            accuracy={calculateAcc(correctWordsRef.current, currWordIndexRef.current)}
                            correctChars={correctCharsRef.current}
                            incorrectChars={incorrectCharsRef.current}
                            missedChars={missedCharsRef.current}
                            extraChars={extraCharsRef.current}
                            graphData = {graphData} // graphData state should be fine here
                        />
                        <button className="timer-button" id="play-again" onClick={resetGame}>Play Again!!</button>
                    </div>)
                    :
                    (<div className="type-Box" onClick={focusInput}>
                        <div className="words">
                            {wordsArray.map((word, wordIndex) => (
                                <span className="word" ref={wordSpanRef[wordIndex]} key={wordIndex}>
                                    {word.split('').map((char, charIndex) => (
                                        <span key={charIndex}>{char}</span>)
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>)}
                <input
                    type="text"
                    className="hidden-input"
                    ref={inputRef}
                    onKeyDown={handleUserInput}
                />
            </div>
        </>
    );
}
