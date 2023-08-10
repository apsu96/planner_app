import { Container } from "./Planning.styled";
import Calendar from "../components/Calendar";
import TaskForm from "../components/TaskForm";
import PlanningTaskList from "../components/PlanningTaskList";
import TaskDistribution from "../components/TaskDistribution";
import { useState } from "react";

function Planning() {
  const [date, setDate] = useState(new Date());
  return (
    <Container>
      <Calendar date={date} setDate={setDate} />
      <TaskForm date={date} />
      <PlanningTaskList date={date} />
      <TaskDistribution date={date} />
    </Container>
  );
}

export default Planning;
