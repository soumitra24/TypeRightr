import React, { useState, useEffect, useRef, useMemo, createRef } from "react";
import MultiplayerUpperMenu from "./MultiplayerUpperMenu";
import Stats from "./Stats";
import Graph from "./Graph";
import { useSocket } from "../Context/SocketContext";
import { useTheme } from "../Context/ThemeContext"; // <<< Import useTheme

const DEFAULT_MULTIPLAYER_TIME = 30;

export default function MultiplayerTypingBox() {
    const { socket, loading } = useSocket();
    const { theme } = useTheme(); // <<< Get the current theme object

    // --- Multiplayer State ---
    const [roomId, setRoomId] = useState(null);
    const [playerNumber, setPlayerNumber] = useState(null); // 1 or 2
    const [opponentProgress, setOpponentProgress] = useState({ correctChars: 0 });
    const [opponentFinished, setOpponentFinished] = useState(false);
    const [opponentStats, setOpponentStats] = useState(null);
    const [gameStatus, setGameStatus] = useState("idle"); // idle, finding, waiting, playing, finished, opponent_left
    const [matchTestTime, setMatchTestTime] = useState(DEFAULT_MULTIPLAYER_TIME); // Always 30 for multiplayer

    // --- Typing State ---
    const [wordsArray, setWordsArray] = useState([]);
    const [currWordIndex, setCurrWordIndex] = useState(0);
    const [currCharIndex, setCurrCharIndex] = useState(0);
    const [countDown, setCountDown] = useState(DEFAULT_MULTIPLAYER_TIME);
    const [testStart, setTestStart] = useState(false);
    const [testEnd, setTestEnd] = useState(false);
    const [correctChars, setCorrectChars] = useState(0);
    const [incorrectChars, setInCorrectChars] = useState(0);
    const [missedChars, setMissedChars] = useState(0);
    const [extraChars, setExtraChars] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const [graphData, setGraphData] = useState([]);
    const intervalRef = useRef(null);
    const inputRef = useRef(null);

    // <<< Refs to hold latest stat values >>>
    const correctCharsRef = useRef(0);
    const incorrectCharsRef = useRef(0);
    const missedCharsRef = useRef(0);
    const extraCharsRef = useRef(0);

    // Filter graph data to ensure unique time entries
    let timeSet = new Set();
    const newGraph = graphData.filter(i=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
        // Implicitly return undefined/false if time entry exists, filtering it out
    })

    // --- Ref Setup ---
    const wordSpanRef = useMemo(() => {
        // Create refs only when we have words to display
        if (wordsArray.length > 0) {
            return Array(wordsArray.length).fill(0).map(() => createRef());
        }
        return []; // Return empty array when no words yet
    }, [wordsArray]);

    // --- Utility ---
    const focusInput = () => inputRef.current?.focus();

    // --- State Reset ---
    const resetLocalState = (timeToUse = DEFAULT_MULTIPLAYER_TIME) => {
        console.log("Resetting local state for time:", timeToUse);
        setCountDown(timeToUse);
        setMatchTestTime(timeToUse);
        setCurrWordIndex(0);
        setCurrCharIndex(0);
        setTestStart(false);
        setTestEnd(false);
        setCorrectChars(0); correctCharsRef.current = 0; // Update ref
        setInCorrectChars(0); incorrectCharsRef.current = 0; // Update ref
        setMissedChars(0); missedCharsRef.current = 0; // Update ref
        setExtraChars(0); extraCharsRef.current = 0; // Update ref
        setCorrectWords(0);
        setGraphData([]);
        setOpponentProgress({ correctChars: 0 });
        setOpponentFinished(false);
        setOpponentStats(null);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        // Only try to reset the word spans if we have words and refs
        if (wordSpanRef && wordSpanRef.length > 0) {
            wordSpanRef.forEach(ref => {
                if (ref && ref.current) {
                    const childNodes = ref.current.childNodes;
                    if (childNodes) {
                        childNodes.forEach(char => {
                            if (char) char.className = '';
                        });
                    }
                }
            });
        }

        focusInput();
    };

    // --- Socket Event Handlers ---
    useEffect(() => {
        if (!socket || loading) {
            console.log("Socket not ready yet, skipping event setup");
            return;
        }

        console.log("Setting up socket event listeners");
        
        const handleMatchFound = ({ roomId: assignedRoomId, players, time }) => {
            console.log(`Match found in room ${assignedRoomId} for ${time}s`, players);
            setRoomId(assignedRoomId);
            setPlayerNumber(players.indexOf(socket.id) + 1);
            setMatchTestTime(time); // Should receive 30 from server
            setGameStatus("waiting");
        };

        const handleWaiting = ({ roomId: waitingRoomId }) => {
            console.log(`Waiting for opponent in room ${waitingRoomId}`);
            setRoomId(waitingRoomId);
            setPlayerNumber(1);
            setMatchTestTime(DEFAULT_MULTIPLAYER_TIME); // Creator uses default
            setGameStatus("waiting");
        };

        const handleGameStart = ({ text, time }) => {
            // <<< LOG THE RAW RECEIVED TEXT >>>
            console.log(`[Client] RAW gameStart received. Time: ${time}, Text: "${text}"`);

            if (!text || typeof text !== 'string' || text.trim() === '') {
                console.error('[Client] Received invalid or empty text from server!');
                setWordsArray([]);
                return;
            }

            // <<< LOG BEFORE SETTING WORDS ARRAY >>>
            console.log(`[Client] Setting wordsArray with text: "${text.substring(0, 500)}..."`);
            const words = text.split(' ');
            setWordsArray(words);

            // Update game status
            setGameStatus("playing");

            // Allow time for the refs to be created AFTER the wordsArray is updated
            setTimeout(() => {
                resetLocalState(time); // Resets state, including countdown
                setCountDown(time);    // Ensure countdown is set correctly after reset

                // <<< LOG AFTER STATE UPDATES IN TIMEOUT >>>
                console.log(`[Client] State updated in timeout. Game status: ${gameStatus}, Countdown: ${countDown}`);

                // Focus and set initial cursor AFTER refs are available
                // Use functional state update to check wordsArray *after* potential updates
                setWordsArray(currentWords => {
                    console.log("[Client] Checking wordsArray inside timeout before cursor set:", currentWords);
                    if (currentWords.length > 0 && wordSpanRef && wordSpanRef.length > 0 && wordSpanRef[0]?.current) {
                        const firstCharElement = wordSpanRef[0].current.childNodes[0];
                        if (firstCharElement) {
                            // Clear previous classes first (might be redundant with resetLocalState, but safe)
                            wordSpanRef.forEach(ref => ref?.current?.childNodes?.forEach(char => { if(char) char.className = ''; }));
                            firstCharElement.className = 'char';
                            console.log("[Client] Initial cursor set.");
                        } else {
                            console.warn("[Client] First char element not found in timeout.");
                        }
                        focusInput();
                    } else {
                         console.warn("[Client] wordSpanRef or first word ref not ready in timeout.");
                    }
                    return currentWords; // Return the current state
                });

            }, 50); // A small delay
        };

        const handleOpponentProgress = (data) => setOpponentProgress(data.progress);

        const handleOpponentLeft = () => {
            console.log("Opponent left");
            setGameStatus("opponent_left");
            if (intervalRef.current) clearInterval(intervalRef.current);
            setRoomId(null); // Clear room ID
        };

        const handleOpponentFinished = ({ userId, stats }) => {
            // <<< LOG RECEIVED EVENT & DATA >>>
            console.log(`[Client] Received 'opponentFinished' event for user ${userId}. Stats:`, stats);
            if (stats) { // Check if stats object is valid
                setOpponentFinished(true);
                setOpponentStats(stats);
                console.log("[Client] Updated opponentFinished and opponentStats state.");
            } else {
                console.warn("[Client] Received 'opponentFinished' event but stats were null/undefined.");
            }
        };

        socket.on('matchFound', handleMatchFound);
        socket.on('waitingForOpponent', handleWaiting);
        socket.on('gameStart', handleGameStart);
        socket.on('opponentProgress', handleOpponentProgress);
        socket.on('opponentLeft', handleOpponentLeft);
        socket.on('opponentFinished', handleOpponentFinished);

        return () => {
            socket.off('matchFound', handleMatchFound);
            socket.off('waitingForOpponent', handleWaiting);
            socket.off('gameStart', handleGameStart);
            socket.off('opponentProgress', handleOpponentProgress);
            socket.off('opponentLeft', handleOpponentLeft);
            socket.off('opponentFinished', handleOpponentFinished);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [socket, loading]); // Add loading as dependency

    // --- Effect to set initial cursor ---
    useEffect(() => {
        // Ensure we are in the playing state and words are loaded
        if (gameStatus === "playing" && wordsArray.length > 0) {
            // Check if the ref array itself is ready
            if (wordSpanRef.current && wordSpanRef.current.length > 0) {
                const firstWordRef = wordSpanRef.current[0];

                // <<< Add more robust check here >>>
                // Check if the ref is connected to a DOM element AND that element has child nodes
                if (firstWordRef?.current && firstWordRef.current.childNodes && firstWordRef.current.childNodes.length > 0) {

                    // Ensure previous classes are cleared before setting cursor
                    wordSpanRef.current.forEach(ref => {
                        // Safely access childNodes within the loop too
                        ref.current?.childNodes?.forEach(char => {
                            if (char) char.className = ''; // Check char exists
                        });
                    });

                    // Now it should be safe to access childNodes[0]
                    firstWordRef.current.childNodes[0].className = 'char';
                    focusInput(); // Focus the hidden input

                } else {
                    // Log if the DOM nodes aren't ready yet, might indicate a deeper timing issue
                    console.warn("Initial cursor useEffect: DOM nodes for the first word not ready yet.");
                }
            } else {
                console.warn("Initial cursor useEffect: wordSpanRef.current is not ready.");
            }
        }
    }, [gameStatus, wordsArray]); // Dependencies remain the same

    // --- Input Handling ---
    const handleUserInput = (e) => {
        if (e.key === 'Shift' || e.key === 'CapsLock' || e.code === 'ShiftLeft' || e.code === 'CapsLock') {
            return; // Exit early for these keys - don't process them as typing input
        }
    
        if (gameStatus !== "playing" || testEnd) return;
        if (!wordsArray || wordsArray.length === 0 || !wordsArray[currWordIndex]) return; // Guard
    
        const allCurrChars = wordSpanRef[currWordIndex]?.current?.childNodes;
        if (!allCurrChars) return; // Guard
    
        // Start timer
        if (!testStart) {
            if (e.key.length === 1 || e.keyCode === 32 || e.keyCode === 8) {
                startTimer();
                setTestStart(true);
            } else { return; }
        }

        const emitProgress = (updatedCorrectChars) => {
            if (socket && roomId) {
                socket.emit('typingUpdate', { roomId, progress: { correctChars: updatedCorrectChars } });
            }
        }

        // --- Key Logic ---
        if (e.keyCode === 32) { // Spacebar
            if (currCharIndex === 0) return;

            const wordNode = wordSpanRef[currWordIndex].current;
            const originalCharsLength = wordsArray[currWordIndex].length;
            const correctCharsInWord = wordNode.querySelectorAll('.correct').length;
            const incorrectCharsInWord = wordNode.querySelectorAll('.incorrect:not(.extra)').length;
            const extraCharsInWord = wordNode.querySelectorAll('.extra').length;
            const missedCharsInWord = Math.max(0, originalCharsLength - (correctCharsInWord + incorrectCharsInWord));

            if (correctCharsInWord === originalCharsLength && extraCharsInWord === 0) {
                setCorrectWords(prev => prev + 1);
            }
            setMissedChars(prev => { // Update ref in functional update
                const newValue = prev + missedCharsInWord;
                missedCharsRef.current = newValue;
                return newValue;
            });

            allCurrChars.forEach(char => {
                char.className = char.className.replace(/ char-right| char/g, '');
            });

            if (currWordIndex === wordsArray.length - 1) return;

            const nextWordIndex = currWordIndex + 1;
            setCurrWordIndex(nextWordIndex);
            setCurrCharIndex(0);

            if (wordSpanRef[nextWordIndex]?.current?.childNodes[0]) {
                wordSpanRef[nextWordIndex].current.childNodes[0].className = 'char';
            }

            emitProgress(correctCharsRef.current); // Emit using ref value
            return;
        }

        if (e.keyCode === 8) { // Backspace
            if (currCharIndex === 0 && currWordIndex === 0) return;

            if (currCharIndex === 0) { // Move to previous word
                const prevWordIndex = currWordIndex - 1;
                const prevWordChars = wordSpanRef[prevWordIndex]?.current?.childNodes;
                if (!prevWordChars) return;

                if (allCurrChars[0]) allCurrChars[0].className = '';

                setCurrWordIndex(prevWordIndex);
                const prevWordLength = prevWordChars.length;
                setCurrCharIndex(prevWordLength);

                if (prevWordChars[prevWordLength - 1]) {
                    prevWordChars[prevWordLength - 1].className += ' char-right';
                }

            } else { // Backspace within word
                const charToRemoveIndex = currCharIndex - 1;
                const charToRemove = allCurrChars[charToRemoveIndex];
                if (!charToRemove) return;

                if (charToRemove.className.includes('extra')) {
                    setExtraChars(prev => { // Update ref
                        const newValue = prev - 1;
                        extraCharsRef.current = newValue;
                        return newValue;
                    });
                    charToRemove.remove();
                    if (allCurrChars[charToRemoveIndex - 1]) {
                        allCurrChars[charToRemoveIndex - 1].className += ' char-right';
                    } else if (wordSpanRef[currWordIndex]?.current?.childNodes[0] && charToRemoveIndex === 0) {
                        wordSpanRef[currWordIndex].current.childNodes[0].className = 'char';
                    }
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

                    charToRemove.className = 'char';

                    if (allCurrChars[charToRemoveIndex + 1]) {
                        allCurrChars[charToRemoveIndex + 1].className = allCurrChars[charToRemoveIndex + 1].className.replace(/ char| char-right/g, '');
                    }
                }
                setCurrCharIndex(charToRemoveIndex);
            }
            emitProgress(correctCharsRef.current); // Emit using ref value
            return;
        }

        // --- Regular Character Typing ---
        let currentCorrectChars = correctChars;
        const currentWordLength = wordsArray[currWordIndex].length;

        if (currCharIndex >= currentWordLength) { // Extra character
            const newSpan = document.createElement('span');
            newSpan.innerText = e.key;
            newSpan.className = 'incorrect extra char-right';
            wordSpanRef[currWordIndex].current.appendChild(newSpan);

            if (allCurrChars[currCharIndex - 1]) {
                allCurrChars[currCharIndex - 1].className = allCurrChars[currCharIndex - 1].className.replace(' char-right', '');
            }

            setExtraChars(prev => { // Update ref
                const newValue = prev + 1;
                extraCharsRef.current = newValue;
                return newValue;
            });
            setCurrCharIndex(prev => prev + 1);

        } else { // Typing within word bounds
            const charElement = allCurrChars[currCharIndex];
            const expectedChar = wordsArray[currWordIndex][currCharIndex];

            if (e.key === expectedChar) {
                charElement.className = 'correct';
                setCorrectChars(prev => { // Update ref
                    const newValue = prev + 1;
                    correctCharsRef.current = newValue;
                    return newValue;
                });
                currentCorrectChars++;
            } else {
                charElement.className = 'incorrect';
                setInCorrectChars(prev => { // Update ref
                    const newValue = prev + 1;
                    incorrectCharsRef.current = newValue;
                    return newValue;
                });
            }

            charElement.className = charElement.className.replace(/ char| char-right/g, '');

            if (currCharIndex + 1 < currentWordLength) {
                if (allCurrChars[currCharIndex + 1]) {
                    allCurrChars[currCharIndex + 1].className = 'char';
                }
            } else {
                charElement.className += ' char-right';
            }

            setCurrCharIndex(prev => prev + 1);
        }
        emitProgress(currentCorrectChars);
    };

    // --- Timer Logic ---
    const startTimer = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        console.log("Starting timer for:", matchTestTime);

        const startTime = Date.now();
        intervalRef.current = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
            const remainingTime = matchTestTime - elapsedTime;

            setCountDown(remainingTime > 0 ? remainingTime : 0);

            // Update graph data using functional update for correctChars
            setCorrectChars((currentCorrectCharsValue) => {
                setGraphData((prevGraphData) => {
                    const currentWpm = elapsedTime > 0 ? (currentCorrectCharsValue / 5) / (elapsedTime / 60) : 0;
                    if (prevGraphData.length > 0 && prevGraphData[prevGraphData.length - 1][0] === elapsedTime) {
                        return prevGraphData;
                    }
                    return [...prevGraphData, [elapsedTime, Math.round(currentWpm)]];
                });
                return currentCorrectCharsValue; // Return the value for setCorrectChars
            });

            if (remainingTime <= 0) {
                console.log("Timer finished");
                clearInterval(intervalRef.current);
                intervalRef.current = null;
                setTestEnd(true);
                setGameStatus("finished");

                if (socket && roomId) {
                    // <<< Use refs to get latest values >>>
                    const currentCorrect = correctCharsRef.current;
                    const currentIncorrect = incorrectCharsRef.current;
                    const currentMissed = missedCharsRef.current;
                    const currentExtra = extraCharsRef.current;

                    const finalStats = {
                        // <<< Pass ref values to calculation functions >>>
                        wpm: calculateWPM(currentCorrect, matchTestTime),
                        accuracy: calculateAcc(currentCorrect, currentIncorrect, currentMissed),
                        correctChars: currentCorrect,
                        incorrectChars: currentIncorrect,
                        missedChars: currentMissed,
                        extraChars: currentExtra
                    };
                    console.log("Game finished, emitting stats:", finalStats);
                    socket.emit('gameFinished', { roomId, stats: finalStats });
                }
            }
        }, 1000);
    };

    // --- Calculations ---
    // <<< Accept arguments >>>
    const calculateWPM = (chars, time) => {
        if (time === 0 || chars === 0) return 0;
        return Math.round((chars / 5) / (time / 60));
    };

    // <<< Accept arguments >>>
    const calculateAcc = (correct, incorrect, missed) => {
        const totalPossibleCorrect = correct + incorrect + missed;
        if (totalPossibleCorrect === 0) return 0;
        return Math.round((correct / totalPossibleCorrect) * 100);
    };

    // --- Find Match ---
    const handleFindMatch = () => {
        if (socket && !loading && !["waiting", "playing", "finding"].includes(gameStatus)) {
            console.log(`Finding match (default ${DEFAULT_MULTIPLAYER_TIME}s)...`);
            socket.emit('findMatch');
            setGameStatus("finding");
            resetLocalState(DEFAULT_MULTIPLAYER_TIME);
            setWordsArray([]);
        } else if (!socket) {
            console.error("Socket connection not available");
        }
    };

    // --- Render Logic ---
    const renderStatus = () => {
        switch (gameStatus) {
            case "idle":
                // <<< Add className="action-button" >>>
                return <button className="action-button" onClick={handleFindMatch}>Find Match</button>;
            case "finding":
                // Use a specific class for status messages if needed
                return <p className="status-message">Searching for opponent...</p>;
            case "waiting":
                return <p className="status-message">Waiting for opponent... Room: {roomId}</p>;
            case "opponent_left":
                return (
                    // Use a container class for layout if needed
                    <div className="status-container">
                        <p className="status-message">Opponent left the game.</p>
                        {/* <<< Add className="action-button" >>> */}
                        <button className="action-button" onClick={handleFindMatch}>Find New Match</button>
                    </div>
                );
            case "playing":
            case "finished":
                return renderGameArea(); // This renders the game area or results
            default:
                return null;
        }
    };

    const renderGameArea = () => {
        // <<< LOG STATE BEFORE RENDERING OPPONENT STATS >>>
        console.log(`[Client Render] Checking opponent render condition: opponentFinished=${opponentFinished}, opponentStats=`, opponentStats);

        return (
            <>
                {/* Opponent progress display - Style this with CSS */}
                <div className="opponent-progress" style={{ color: theme.typeboxText }}> {/* Example inline style using theme */}
                    Opponent Progress: {opponentProgress?.correctChars || 0} correct chars
                </div>

                <MultiplayerUpperMenu
                    countDown={countDown}
                    selectedTime={matchTestTime}
                />

                {(testEnd) ?
                    (<div className="results-area">
                        <h3>Your Results</h3>
                        {/* User's stats - showGraph defaults to true or can be explicit */}
                        <Stats wpm={calculateWPM(correctChars, matchTestTime)}
                            accuracy={calculateAcc(correctChars, incorrectChars, missedChars)}
                            correctChars={correctChars}
                            incorrectChars={incorrectChars}
                            missedChars={missedChars}
                            extraChars={extraChars}
                            graphData={newGraph}
                            // showGraph={true} // Optional: Explicitly set
                        />

                        {/* Opponent Results Section */}
                        {opponentFinished && opponentStats && (
                            <>
                            <div className="opponent-results-wrapper">
                                <div> {/* Optional inner div */}
                                    <h3>Opponent Results</h3>
                                    <Stats {...opponentStats} graphData={[]} showGraph={false} />
                                </div>
                            </div>
                            </>
                        )}
                        {/* Message if you finished but opponent hasn't */}
                        {!opponentFinished && gameStatus === 'finished' && (
                            <p className="status-message">Waiting for opponent to finish...</p>
                        )}
                        {/* Play Again Button */}
                        <button className="action-button" onClick={handleFindMatch}>Play Again</button>
                    </div>)
                    :
                    (<div className="type-Box" onClick={focusInput}>
                        <div className="words">
                            {wordsArray.length > 0 ?
                                wordsArray.map((word, wordIndex) => {
                                    // Ensure wordSpanRef.current exists and has a value at this index
                                    if (!wordSpanRef || wordSpanRef.length <= wordIndex || !wordSpanRef[wordIndex]) {
                                        return <span key={wordIndex} className="word">{word}</span>;
                                    }

                                    return (
                                        <span className="word" ref={wordSpanRef[wordIndex]} key={wordIndex}>
                                            {word.split('').map((char, charIndex) => (
                                                <span key={charIndex}>{char}</span>
                                            ))}
                                        </span>
                                    );
                                })
                                : <p>Waiting for words to load... If this persists, try finding a new match.</p>
                            }
                        </div>
                    </div>)
                }
                <input
                    type="text"
                    className="hidden-input"
                    ref={inputRef}
                    onKeyDown={handleUserInput}
                    disabled={gameStatus !== 'playing' || testEnd}
                />
            </>
        );
    };

    // Main component return
    return (
        // Apply theme background/text color to the container if needed
        <div className="multiplayer-container" style={{ color: theme.font }}>
            <h2>Multiplayer Typing Test</h2>
            {renderStatus()}
        </div>
    );
}

/*
Reminder: Ensure your CSS file has styles for `.action-button` using theme variables:

.action-button {
  padding: 8px 16px;
  margin: 10px 5px;
  background-color: var(--button-background-color, #007bff); // Theme variable
  color: var(--button-text-color, white); // Theme variable
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
}

.action-button:hover {
  background-color: var(--button-hover-background-color, #0056b3); // Theme variable
}

// Also style other elements like status messages, opponent progress, etc.
.status-message {
  margin: 15px 0;
  color: var(--text-color, #333); // Use theme variable
}

.opponent-progress {
  margin-bottom: 10px;
  color: var(--typebox-text-color, gray); // Use theme variable
  text-align: center;
}

.multiplayer-container h2 {
    color: var(--text-color, #333); // Style heading with theme
    text-align: center;
    margin-bottom: 15px;
}

*/