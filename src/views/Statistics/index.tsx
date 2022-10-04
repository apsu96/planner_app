import { StatisticsContainer, StatisticsPageTitle, StatisticsTitle } from "./Statistics.styled";
import StatisticsIcon from "../../images/Statistics_icon";

function Statistics() {
    return <StatisticsContainer>
        <StatisticsPageTitle>
            <StatisticsIcon selected={false}/>
            <StatisticsTitle>Statistics</StatisticsTitle>
        </StatisticsPageTitle>
    </StatisticsContainer>
}

export default Statistics