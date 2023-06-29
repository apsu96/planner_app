import { PlanningContainer, PlanningPageTitle, PageTitle, Container } from "./Planning.styled"
import PlanningIcon from "../../images/Planning_icon"
import Calendar from "../../components/Calendar"
import TaskForm from "../../components/TaskForm"
import PlanningTaskList from "../../components/PlanningTaskList"
import TaskDistribution from "../../components/TaskDistribution"

function Planning() {
    return <PlanningContainer>
        <PlanningPageTitle>
            <PlanningIcon selected={false} />
            <PageTitle>Planning</PageTitle>
        </PlanningPageTitle>
        <Container>
            <Calendar />
            <TaskForm />
            <PlanningTaskList />
            <TaskDistribution />
        </Container>
    </PlanningContainer>
}

export default Planning