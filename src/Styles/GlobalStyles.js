import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    background-image: ${({ theme }) => theme.backgroundImage};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.font};
    margin: 0;
    padding: 0;
    transition: all 0.25s linear;
}

.Canvas{
    display: grid;
    min-height: 100vh;
    grid-auto-flow: row;
    grid-template-rows: auto 1fr auto;
    gap: 0.5rem;
    padding: 1.5rem;
    padding-bottom: 0px;
    align-items: center;
    text-align: center;
}

.container{
    font-family: "sono", monospace;
    font-weight: 500;
    height: 90%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
}

.upper-menu{
    width: 70%;
    height: 3rem;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: end;
    align-items: center;
    margin-bottom: 2rem;
}

.utils{
    display: flex;
    flex-direction: row;
    width: 20%;
    align-items: center;
    justify-content: space-evenly;
    padding: 5px;
}

.timer{
    flex: 1;
    font-size: 2rem;
    padding: 2%;
    /* border: 1px solid ; */
    text-align: left ;
}


.timer-button{
    margin-left: 1rem;
    color: black;
    background-color: wheat;
    width: 7rem;
    height: 4rem;
    border: none;
    font-size: 20px;
    font-family: "sono", monospace;
    font-weight: 500;
    cursor: pointer;
    border-radius: 20px;
    transition: all 0.25s ease;

}

.timer-button:hover{
    width: 9rem;
}

#play-again{
    font-size: 15px;
    border-radius: 10px;
    width: 5.5rem;
    height: 3.5rem;
    margin: 1.5rem;
    padding: 10px;
    transition: all 0.25s linear;
}
#play-again:hover{
    font-size: 16px;
    background-color: hsl(51, 100%, 50%) ;
    width: 6.5rem;   
    height: 3.7rem;
}
.type-Box{
    font-family: "Sono", monospace;
    font-weight: 350;
    display: block;
    width: 70%;
    height: 80%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    color: ${({ theme }) => theme.typeboxText};
}

.words{
    font-size: 24px;
    display: flex;
    flex-wrap: wrap;
}

.word{
    margin: 5px;
    padding: 2px;
}
.start-button{
    margin: 2%;
    cursor: pointer;
    border-radius: 5px;
    background-color: rgb(128, 128, 128);
    height: 2rem;
    transition: all 0.25s ease;
}

.start-button:hover{
    background-color: rgba(128, 128, 128, 0.479);
    height: 2.5rem;
    width: 3rem
        
}

.hidden-input{
    opacity: 0;
    cursor: default;
    height: 1px;
    width: 1px;
}

.char{
    border-left: 2px solid;
    animation: blink 2s infinite;
    animation-timing-function: step-end ;
}
@keyframes blink{
    0% {border-left: ${({ theme }) => theme.cursor};}
    25% {border-left: ${({ theme }) => theme.cursorColor};}
    50% {border-left: ${({ theme }) => theme.cursor};}
    75% {border-left: ${({ theme }) => theme.cursorColor};}
    100% {border-left: ${({ theme }) => theme.cursor};}
}
.char-right{
    border-right: 2px solid white;
    animation: blinkright 2s infinite;
    animation-timing-function: step-end;
}

@keyframes blinkright{
    0% {border-right: ${({ theme }) => theme.cursor};}
    25% {border-right: ${({ theme }) => theme.cursorColor};}
    50% {border-right: ${({ theme }) => theme.cursor};}
    75% {border-right: ${({ theme }) => theme.cursorColor};}
    100% {border-right: ${({ theme }) => theme.cursor};}
}

.correct{
    transition: color 0.25s linear;
    color: ${({ theme }) => theme.correctFont};
}
.incorrect{
    color: red;
}

.header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    height: 5rem;
    padding: 10px;
}

.logo-container {
  font-family:"Nova Mono", monospace;
  font-style: normal;
  font-size: 2rem;
  white-space: nowrap;
  overflow: hidden;
}

.typewriter {
  display: inline-block;
  }

@keyframes blink-caret {
  from, to { border-color: transparent; }
  50% { border-color: orange; }
}

.typewriter::after {
  content: "";
  border-right: 0.15em solid orange;
  animation: blink-caret 0.75s step-end infinite;
}
.accIcon{
    padding-top: 1.5rem;
    margin: 1rem 1rem;
    transition: color 0.2s ease, transform 0.2s ease; /* Add transition for smooth hover */
    vertical-align: middle; /* Align icon vertically if needed */
}
.accIcon:hover{
  transform: scale(1.07);
}
// ... existing styles ...

.logoutIcon {
  cursor: pointer;
  margin-right: 1rem; /* Apply the margin here */
  color: ${({ theme }) => theme.font}; /* Use theme color */
  transition: color 0.2s ease, transform 0.2s ease; /* Add transition for smooth hover */
  vertical-align: middle; /* Align icon vertically if needed */
}

.logoutIcon:hover { /* Change color on hover (e.g., to typeboxText or red) */
  transform: scale(1.1);
}
.results-box {
    color: ${({ theme }) => theme.font};
    font-family: "sono", monospace;
    font-weight: 500;
    width: 70%; /* Keep overall width */
    padding-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between; /* Space between stats and graph */
    align-items: flex-start;
    flex-wrap: wrap; 
    gap: 2rem;
}
.stats {
    flex: 1 1 auto;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
}
.title {
    font-size: 1.5rem; /* Use rem */
    margin-bottom: 0.25rem;
}

.subtitle {
    font-size: 1.5rem; /* Use rem */
    margin-bottom: 1rem; /* Use rem */
    font-weight: bold;
}
#charstats{
    font-size: 1rem;
    margin-top: 0.5rem;
    line-height: 1.5;
}

.graph{
    flex: 2 1 60%; 
    min-width: 300px;
}
.graph-placeholder {
    flex: 2 1 60%; /* Match graph flex properties */
    min-width: 300px; 
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px; /* Give it some minimum height */
    color: ${({ theme }) => theme.font};
    font-style: italic;
}
.opponent-results-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 1.25rem; 
    height: 50%;
}

.Graph{
    height: 90%;
    width: 100%;
}

.footer{
    border-top: 1px solid wheat;
    margin-top: 8rem;
    margin-bottom: 2px;
    font-family: 'sono', monospace;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: bottom;
}
.links{
    height: 100%;
    text-align: bottom;
}
.links a{
    text-decoration: none;
    transition: all 0.5s ease;
    color: ${({ theme }) => theme.font};
}
.links a:hover{
    opacity: 0.6;
}

.links li{
    font-size: 17px;
    margin: 0.5rem;
    list-style-type: none;
    text-align: left;
}
.credit{
    margin-top: 2.5rem;
}
.logoutIcon{
    cursor: pointer;
}

.action-button {
    font-family: "sono", monospace;
    padding: 0.5em 1em; /* Adjust multiplier as needed */
    margin: 0.9em 0.32rem;
    background-color: transparent;
    color: ${({ theme }) => theme.font};
    border: 3px solid wheat;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
    transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    transform-origin: center;
    white-space: nowrap;
}

.action-button:hover {
    transform: scale(1.05);
}

// Also style other elements like status messages, opponent progress, etc.
.status-message {
    font-family: "sono", monospace;
    margin: 0.9375rem 0; /* 15px */
    color: ${({ theme }) => theme.font};
    font-size: clamp(1rem, 2vw + 0.5rem, 1.2rem);
}

.opponent-progress {
    font-family: "sono", monospace;
    margin-bottom: 0.625rem; /* 10px */
    color: ${({ theme }) => theme.font}; // Use theme variable
    text-align: center;
}

.multiplayer-container h2{
    font-family: "sono", monospace;
    color: ${({ theme }) => theme.font}; // Style heading with theme
    text-align: center;
    margin-bottom: 0.9375rem; 
    font-size: clamp(1.5rem, 4vw + 1rem, 2rem);
}


`