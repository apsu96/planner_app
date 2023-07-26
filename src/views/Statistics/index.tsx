import { Container } from "../Planning/Planning.styled";
import TaskCompletionChart from "../../components/TaskCompletionChart";
import TaskDistribution from "../../components/TaskDistribution";
import EmotionalStateChart from "../../components/EmotionalStateChart";
import StatisticsInfo from "../../components/StatisticsInfo";

function Statistics() {
    return <Container>
            <StatisticsInfo />
            <TaskCompletionChart />
            <TaskDistribution />
            <EmotionalStateChart />
        </Container>
}

export default Statistics