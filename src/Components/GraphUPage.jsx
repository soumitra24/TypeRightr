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

    const options = {
        plugins: {
            legend: {
                labels: {
                    color: theme.font,
                    size: '10px'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: theme.font
                },
                grid: {
                    color: theme.font
                }
            },
            y: {
                ticks: {
                    color: theme.font
                },
                grid: {
                    color: theme.font
                }
            }
        }
    };

    const data = {
        labels: graphData.map(i => i.date),
        datasets: [
            {
                data: graphData.map(i => i.wpm),
                label: 'WPM',
                borderColor: 'hsl(51, 100%, 50%)'
            }
        ]
    };

    return (
        <div className="graph-data" style={{Height: "50vh", width: "50vw", display:"flex", justifyContent:"center"}}>
            <Line
                className='Graph'
                data={data}
                options={options}
            />
        </div>
    );
}
