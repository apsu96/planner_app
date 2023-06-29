import { StatisticsContainer, StatisticsPageTitle, StatisticsTitle } from "./Statistics.styled";
import StatisticsIcon from "../../images/Statistics_icon";
import { Container } from "../Planning/Planning.styled";
import TaskCompletionChart from "../../components/TaskCompletionChart";
import TaskDistribution from "../../components/TaskDistribution";
import EmotionalStateChart from "../../components/EmotionalStateChart";
import StatisticsInfo from "../../components/StatisticsInfo";

function Statistics() {
    return <StatisticsContainer>
        <StatisticsPageTitle>
            <StatisticsIcon selected={false}/>
            <StatisticsTitle>Statistics</StatisticsTitle>
        </StatisticsPageTitle>
        <Container>
            <StatisticsInfo />
            <TaskCompletionChart />
            <TaskDistribution />
            <EmotionalStateChart />
        </Container>
    </StatisticsContainer>
}

export default Statistics