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
)




export default function Graph({graphData}) {
    const {theme} = useTheme();
    const options = {
      plugins: {
        legend: {
          labels: {
            color: theme.font,
            size: '10px '           
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
    return (<>
        <div className="graph-data">
            <Line
                className='Graph'
                data={
                    {
                        labels: graphData.map(i=>i[0]),
                        datasets: [
                            {
                                data: graphData.map(i=>i[1]),
                                
                                label: 'WPM',
                                borderColor: 'hsl(51, 100%, 50%)'                                
                            }
                        ]
                    }
                }
                options={options}
                  
            />
        </div>

    </>);
}