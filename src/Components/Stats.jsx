import { useEffect } from "react";
import { auth, db } from "../FirebaseConfig";
import Graph from "./Graph";
import { toast, ToastContainer, Bounce } from "react-toastify"      
export default function Stats({ wpm, 
                                accuracy, 
                                correctChars, 
                                incorrectChars,
                                missedChars,
                                extraChars,
                                graphData})

{
    let timeSet = new Set();
    const newGraph = graphData.filter(i=>{
        if(!timeSet.has(i[0])){
            timeSet.add(i[0]);
            return i;
        }
    })

const pushtoDB = () =>{
    const {uid} = auth.currentUser;
    const resultRef = db.collection('Results');
    resultRef.add({
        wpm: wpm,
        accuracy: accuracy,
        correctChars: correctChars,
        incorrectChars: incorrectChars,
        missedChars: missedChars,
        timeStamp: new Date(),
        userId: uid
    }).catch((err)=>{
        toast.error('Couldn\'t save the Results :(', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
    })
}

useEffect(()=>{
    if(auth.currentUser){
        pushtoDB();
    }
    else{
        toast.warning('Log In to save Results!!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
    }
})
    return(
        <>
            <div className="results-box">
                <div className="stats">
                    <div className="title">WPM</div>
                    <div className="subtitle">{wpm}</div>
                    <div className="title">Accuracy</div>
                    <div className="subtitle">{accuracy}%</div>
                    <div className="title">Characters Typed</div>
                    <div className="subtitle" id="charstats">Correct Chars: {correctChars}<br/>
                                                            Incorrect Chars: {incorrectChars}<br/>
                                                            Missed Chars: {missedChars}
                                                            </div>

                </div>
                <div className="graph">
                    <Graph graphData = {newGraph}/>
                </div>
            </div>
        </>
    );
}