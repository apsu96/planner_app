import { Container } from "./Planning.styled"
import Calendar from "../../components/Calendar"
import TaskForm from "../../components/TaskForm"
import PlanningTaskList from "../../components/PlanningTaskList"
import TaskDistribution from "../../components/TaskDistribution"

function Planning() {
    return <Container>
        <Calendar />
        <TaskForm />
        <PlanningTaskList />
        <TaskDistribution />
    </Container>
}

export default Planning