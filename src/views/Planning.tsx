import { Container, PlanningRow } from "./Planning.styled";
import Calendar from "../components/Calendar";
import TaskForm from "../components/TaskForm";
import PlanningTaskList from "../components/PlanningTaskList";
import TaskDistribution from "../components/TaskDistribution";
import { useState } from "react";

function Planning() {
  const [date, setDate] = useState(new Date());
  return (
    <Container>
      <PlanningRow>
        <Calendar date={date} setDate={setDate} />
        <TaskForm date={date} />
      </PlanningRow>
      <PlanningRow>
        <PlanningTaskList date={date} />
        <TaskDistribution date={date} />
      </PlanningRow>
    </Container>
  );
}

export default Planning;
