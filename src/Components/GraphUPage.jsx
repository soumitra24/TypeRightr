import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useTheme } from '../Context/ThemeContext';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function GraphUname({ graphData }) {
    const { theme } = useTheme();
    
    // Limit data points to maximum 7 if still too many
    const limitedData = graphData.length > 7 ? 
        graphData.slice(-7) : graphData;

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide legend to reduce clutter
            },
            tooltip: {
                backgroundColor: theme.background || 'rgba(0,0,0,0.8)',
                titleColor: theme.font || '#fff',
                bodyColor: theme.font || '#fff',
                titleFont: {
                    family: '"Sono", monospace',
                    size: 14
                },
                bodyFont: {
                    family: '"Sono", monospace',
                    size: 12
                },
                padding: 10,
                displayColors: false, // Hide color box in tooltip
            }
        },
        scales: {
            x: {
                ticks: {
                    color: theme.font,
                    font: {
                        family: '"Sono", monospace',
                        size: 12
                    },
                    maxRotation: 45, // Rotate labels for better fit
                },
                grid: {
                    display: false, // Hide x grid lines
                    drawBorder: true,
                    color: theme.font + '33' // Add transparency
                }
            },
            y: {
                ticks: {
                    color: theme.font,
                    font: {
                        family: '"Sono", monospace',
                        size: 12
                    },
                },
                grid: {
                    display: true,
                    drawBorder: true,
                    color: theme.font + '33', // Add transparency
                    lineWidth: 0.5, // Thinner lines
                },
                min: function(context) {
                    // Set min to slightly below the lowest value (or 0)
                    const min = Math.min(...limitedData.map(item => item.wpm));
                    return Math.max(0, min - 10);
                },
                max: function(context) {
                    // Set max to slightly above the highest value
                    const max = Math.max(...limitedData.map(item => item.wpm));
                    return max + 10;
                },
            }
        },
        elements: {
            line: {
                tension: 0.3, // Slight curve for smoother visual
                borderWidth: 2,
            },
            point: {
                radius: 4,
                borderWidth: 2,
                backgroundColor: theme.background,
                hoverRadius: 6,
            }
        },
        layout: {
            padding: {
                left: 10,
                right: 20,
                top: 20,
                bottom: 10
            }
        }
    };

    const data = {
        labels: limitedData.map(i => i.date),
        datasets: [
            {
                data: limitedData.map(i => i.wpm),
                label: 'WPM',
                borderColor: 'hsl(51, 100%, 50%)',
                backgroundColor: 'hsla(51, 100%, 50%, 0.2)',
                fill: false,
                pointBackgroundColor: 'hsl(51, 100%, 70%)',
                pointBorderColor: 'hsl(51, 100%, 50%)',
            }
        ]
    };

    return (
        <div className="graph-data" style={{
            height: "18rem", // Fixed height instead of viewport units
            width: "50rem",   // Full width of container
            maxWidth: "600px", // Maximum width to prevent stretching
            margin: "2rem" // Center the graph
        }}>
            <Line
                className='Graph'
                data={data}
                options={options}
            />
        </div>
    );
}
