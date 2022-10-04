import { PlanningContainer, PlanningPageTitle, PageTitle } from "./Planning.styled"
import PlanningIcon from "../../images/Planning_icon"

function Planning () {
    return <PlanningContainer>
        <PlanningPageTitle>
            <PlanningIcon selected={false}/>
            <PageTitle>Planning</PageTitle>
        </PlanningPageTitle>
    </PlanningContainer>
}

export default Planning