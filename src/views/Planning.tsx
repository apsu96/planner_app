import { Container, PlanningRow } from "./Planning.styled";
import Calendar from "../components/Calendar";
import TaskForm from "../components/TaskForm";
import PlanningTaskList from "../components/PlanningTaskList";
import TaskDistribution from "../components/TaskDistribution";

function Planning() {
  return (
    <Container>
      <PlanningRow>
        <Calendar />
        <TaskForm />
      </PlanningRow>
      <PlanningRow>
        <PlanningTaskList />
        <TaskDistribution />
      </PlanningRow>
    </Container>
  );
}

export default Planning;
