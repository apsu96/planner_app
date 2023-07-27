import { ProfileContainer, AvatarUsernameContainer, Username, Status, MenuContainer, MenuItem, MenuIconContainer, MobileLogoContainer } from "./Profile.styled"
import Logo from "../images/Logo.svg"
import Avatar from "../images/Avatar.svg"
import PlanningIcon from "../images/Planning_icon"
import TasksIcon from "../images/Tasks_icon"
import StatisticsIcon from "../images/Statistics_icon"
import CloseIcon from "../images/CloseIcon.svg"
import { ActionIcon } from "./UIKit.styled"

interface ProfileProps {
    currentView: {
        planning: boolean;
        myDay: boolean;
        statistics: boolean;
    };
    setCurrentView: React.Dispatch<React.SetStateAction<{
        planning: boolean;
        myDay: boolean;
        statistics: boolean;
    }>>;
    isMobile: boolean;
    toggleMenu: () => void;
}

function Profile({ currentView, setCurrentView, isMobile, toggleMenu }: ProfileProps) {
    return <ProfileContainer isMobile={isMobile}>
        {!isMobile ? (
            <div>
                <img src={Logo} alt="logo" />
            </div>
        ) : (
            <MobileLogoContainer>
                <ActionIcon src={CloseIcon} alt="close menu" width={24} height={24} onClick={toggleMenu} />
                <img src={Logo} alt="logo" width={131} height={62} />
            </MobileLogoContainer>)}
        <AvatarUsernameContainer>
            <img src={Avatar} alt="avatar" />
            <div>
                <Username>Ann Jonson</Username>
                <Status>Online</Status>
            </div>
        </AvatarUsernameContainer>
        <MenuContainer>
            <MenuItem to='Planning' color={currentView.planning ? "selected" : "notSelected"} onClick={toggleMenu}>
                <MenuIconContainer>
                    <PlanningIcon selected={currentView.planning} />
                </MenuIconContainer>
                Planning
            </MenuItem>
            <MenuItem to='MyDay' color={currentView.myDay ? "selected" : "notSelected"} onClick={toggleMenu}>
                <MenuIconContainer>
                    <TasksIcon selected={currentView.myDay} />
                </MenuIconContainer>
                Tasks for Today
            </MenuItem>
            <MenuItem to='Statistics' color={currentView.statistics ? "selected" : "notSelected"} onClick={toggleMenu}>
                <MenuIconContainer>
                    <StatisticsIcon selected={currentView.statistics} />
                </MenuIconContainer>
                Statistics
            </MenuItem>
        </MenuContainer>
    </ProfileContainer>
}

export default Profile;
