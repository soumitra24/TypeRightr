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

/* .timer-button {
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  margin: 2%;
  outline: 0;
  border: 1px solid white;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  touch-action: manipulation;
}

.timer-button:after {
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.timer-button:hover:after {
  top: 0px;
  left: 0px;
}

@media (min-width: 768px) {
  .timer-button {
    padding: 13px 50px 13px;
  }
} */
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
}

.results-box{
    color:  ${({ theme }) => theme.cursorColor};
    font-family: "sono", monospace;
    font-weight: 500;
    width: 70%;
    padding-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
}


.stats{
    width: 35%; 
    display: flex;
    flex-direction: column;
    padding: 1rem;
}
.title{
    font-size: 25px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
}
.subtitle{
    font-size: 25px;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}
#charstats{
    font-size: 20px;
    margin-top: 5px;
}

.graph{
    width: 65%;
}

.Graph{
    height: 80%;
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



`