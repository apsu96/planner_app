import { Container, Title, ChartBox } from "./UIKit.styled";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskDistribution = () => {
    const data = {
        labels: ['Work', 'Leisure'],
        datasets: [{
            data: [3, 2],
            backgroundColor: ['rgba(170, 132, 161, 1)', 'rgba(249, 249, 249, 1)']
        }]
    }
    return (
        <Container>
            <Title>Allocation of time between work and rest</Title>
            <ChartBox>
                <Doughnut data={data} />
            </ChartBox>
        </Container>
    );
};

export default TaskDistribution;