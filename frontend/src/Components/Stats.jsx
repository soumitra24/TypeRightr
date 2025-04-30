import React from 'react';
import Graph from './Graph';
import { useTheme } from '../Context/ThemeContext';

// Add showGraph prop, default to true
export default function Stats({ wpm, accuracy, correctChars, incorrectChars, missedChars, extraChars, graphData, showGraph = true }) {
    const { theme } = useTheme();

    // Filter graph data to ensure unique time entries (can be done here or before passing)
    let timeSet = new Set();
    const newGraph = graphData.filter(i => {
        if (!timeSet.has(i[0])) {
            timeSet.add(i[0]);
            return true;
        }
        return false;
    });

    return (
        // Use flexbox for layout
        <div className="results-box" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="stats">
                <div className="title">WPM</div>
                <div className="subtitle">{wpm}</div>
                <div className="title">Accuracy</div>
                <div className="subtitle">{accuracy}%</div>
                <div id="charstats">
                    Correct Characters: {correctChars} <br />
                    Incorrect Characters: {incorrectChars} <br />
                    Missed Characters: {missedChars} <br />
                    Extra Characters: {extraChars}
                </div>
            </div>
            {/* Conditionally render the graph */}
            {showGraph && newGraph.length > 0 && (
                <div className="graph">
                    <Graph graphData={newGraph} theme={theme} />
                </div>
            )}
            {/* Optional: Message if graph is hidden or has no data */}
            {showGraph && newGraph.length === 0 && (
                 <div className="graph-placeholder" style={{ width: '65%', textAlign: 'center', color: theme.typeboxText }}>
                    Graph data not available.
                 </div>
            )}
             {!showGraph && (
                 <div className="graph-placeholder" style={{ width: '65%', textAlign: 'center', color: theme.typeboxText }}>
                    {/* Intentionally empty or add a small message if desired */}
                 </div>
            )}
        </div>
    );
}