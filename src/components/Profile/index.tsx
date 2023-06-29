import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ProfileContainer, AvatarUsernameContainer, Username, Status, MenuContainer, MenuItem, MenuIconContainer } from "./Profile.styled"
import Logo from "../../images/Logo.svg"
import Avatar from "../../images/Avatar.svg"
import PlanningIcon from "../../images/Planning_icon"
import TasksIcon from "../../images/Tasks_icon"
import StatisticsIcon from "../../images/Statistics_icon"

function Profile() {
    const [currentView, setCurrentView] = useState({
        planning: true,
        myDay: false,
        statistics: false
    })
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/MyDay") {
            setCurrentView({
                planning: false,
                myDay: true,
                statistics: false
            })
        } else if (location.pathname === "/Statistics") {
            setCurrentView({
                planning: false,
                myDay: false,
                statistics: true
            })
        } else {
            setCurrentView({
                planning: true,
                myDay: false,
                statistics: false
            })
        }
    }, [location])

    return <ProfileContainer>
        <div>
            <img src={Logo} alt="logo" />
        </div>
        <AvatarUsernameContainer>
            <img src={Avatar} alt="avatar" />
            <div>
                <Username>Ann Jonson</Username>
                <Status>Online</Status>
            </div>
        </AvatarUsernameContainer>
        <MenuContainer>
            <MenuItem to='Planning' color={currentView.planning ? "selected" : "notSelected"}>
                <MenuIconContainer>
                    <PlanningIcon selected={currentView.planning} />
                </MenuIconContainer>
                Planning
            </MenuItem>
            <MenuItem to='MyDay' color={currentView.myDay ? "selected" : "notSelected"}>
                <MenuIconContainer>
                    <TasksIcon selected={currentView.myDay} />
                </MenuIconContainer>
                Tasks for Today
            </MenuItem>
            <MenuItem to='Statistics' color={currentView.statistics ? "selected" : "notSelected"}>
                <MenuIconContainer>
                    <StatisticsIcon selected={currentView.statistics} />
                </MenuIconContainer>
                Statistics
            </MenuItem>
        </MenuContainer>
    </ProfileContainer>

}

export default Profile;
