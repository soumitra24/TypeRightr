import Graph from "./Graph";
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
    return(
        <>
            <div className="results-box">
                <div className="stats">
                    <div className="title">WPM</div>
                    <div className="subtitle">{wpm}</div>
                    <div className="title">Accuracy</div>
                    <div className="subtitle">{accuracy}</div>
                    <div className="title">Characters</div>
                    <div className="subtitle">{correctChars}/{incorrectChars}/{missedChars}/{extraChars}</div>

                </div>
                <div className="graph">
                    <Graph graphData = {newGraph}/>
                </div>
            </div>
        </>
    );
}