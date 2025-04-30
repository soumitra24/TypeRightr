import React, { useState, useEffect, useRef, useMemo, createRef } from "react";
import Paragraphs from "./Paragraphs";
import UpperMenu from "./UpperMenu";
import { useTestMode } from "../Context/TestTimerContext";
import Stats from "./Stats";

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

        if (e.keyCode === 32) {
            let correctCharsInWord = wordSpanRef[currWordIndex].current.querySelectorAll('.correct');

            if (correctCharsInWord.length === allCurrChars.length) {
                setCorrectWords(correctWords + 1);
            }

            if (allCurrChars.length <= currCharIndex) {
                allCurrChars[currCharIndex - 1].classList.remove('char-right');
            } else {
                setMissedChars(missedChars + (allCurrChars.length - currCharIndex));
                allCurrChars[currCharIndex].classList.remove('char');
            }
            
            wordSpanRef[currWordIndex + 1].current.childNodes[0].className = 'char';
            setCurrWordIndex(currWordIndex + 1);
            setCurrCharIndex(0);
            return;
        }

        if (e.keyCode === 8) {
            if (allCurrChars.length === currCharIndex) {
                if (allCurrChars[currCharIndex - 1].className.includes('extra')) {
                    allCurrChars[currCharIndex - 1].remove();
                    allCurrChars[currCharIndex - 2].className += ' char-right';
                } else {
                    allCurrChars[currCharIndex - 1].className = 'char';
                }
                setCurrCharIndex(currCharIndex - 1);
                return;
            }

            if (currCharIndex !== 0) {
                allCurrChars[currCharIndex].className = '';
                allCurrChars[currCharIndex - 1].className = 'char';
                setCurrCharIndex(currCharIndex - 1);  
            }

            return;
        }

        if (currCharIndex === allCurrChars.length) {
            let newSpan = document.createElement('span');
            newSpan.textContent = e.key;
            newSpan.className = 'incorrect extra char-right';
            allCurrChars[currCharIndex - 1].classList.remove('char-right');
            wordSpanRef[currWordIndex].current.append(newSpan);
            setCurrCharIndex(currCharIndex + 1);
            setExtraChars(extraChars + 1);
            return;
        }

        if (e.key === allCurrChars[currCharIndex].innerText) {
            allCurrChars[currCharIndex].className = 'correct';
            setCorrectChars(correctChars + 1);
        } else {
            allCurrChars[currCharIndex].className = 'incorrect';
            setInCorrectChars(incorrectChars + 1);
        }

        if (currCharIndex + 1 === allCurrChars.length) {
            allCurrChars[currCharIndex].className += ' char-right';
        } else {
            allCurrChars[currCharIndex + 1].className = 'char';
        }
        setCurrCharIndex(currCharIndex + 1);
    };

    const focusInput = () => {
        inputRef.current.focus();
    };

    const startTimer = () => {
        const intervalID = setInterval(timer, 1000);

        function timer() {
            setCountDown((c) => {
                setCorrectChars((correctChars)=>{
                    setGraphData((graphData)=>{
                        return [...graphData,[
                            testTime - c + 1,
                            (correctChars/5)/((testTime - c + 1)/60)
                        ]];
                    })

                    return correctChars;
                })
                if (c === 1) {
                    setTestEnd(true);
                    clearInterval(intervalID);
                    return 0;
                }
                return c - 1;
            });
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
        setCorrectChars(0);
        setInCorrectChars(0);
        setMissedChars(0);
        setExtraChars(0);
        setCorrectWords(0);
        focusInput();
    };

    const calculateWPM = () => {
        return Math.round(((correctChars / 5) / (testTime / 60)));
    };

    const calculateAcc = () => {
        if (currWordIndex === 0) {
            return 0;
        }
        return Math.round(((correctWords / currWordIndex) * 100));
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
                        <Stats wpm={calculateWPM()}
                            accuracy={calculateAcc()} 
                            correctChars={correctChars}
                            incorrectChars={incorrectChars}
                            missedChars={missedChars}
                            extraChars={extraChars}
                            graphData = {graphData}
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
