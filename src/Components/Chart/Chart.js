import ChartBar from './ChartBar';
import './Chart.css';

export default function Chart(props) {
    const max = Math.max(...props.dataPoints.map((point) => point.value));

    return <div className="chart">
        {
            props.dataPoints.map((point) => <ChartBar
                key={point.label}
                value={point.value}
                max={max}
                label={point.label}
            />)
        }
    </div>
}