import { Container, PlanningRow } from "./Planning.styled";
import TaskCompletionChart from "../components/TaskCompletionChart";
import TaskDistribution from "../components/TaskDistribution";
import EmotionalStateChart from "../components/EmotionalStateChart";
import StatisticsInfo from "../components/StatisticsInfo";
import { Container as UIContainer } from "../components/UIKit.styled";

function Statistics() {
  return (
    <Container>
      <PlanningRow>
        <StatisticsInfo />
        <UIContainer>
          <TaskCompletionChart />
        </UIContainer>
      </PlanningRow>
      <PlanningRow>
        <TaskDistribution date={new Date()} />
        <UIContainer>
          <EmotionalStateChart />
        </UIContainer>
      </PlanningRow>
    </Container>
  );
}

export default Statistics;
