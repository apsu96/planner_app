import { ProfileContainer, AvatarUsernameContainer, UsernameContainer, Username, Status, MenuContainer, MenuItem, MenuIcon } from "./Profile.styled"
import Logo from "../../images/Logo.svg"
import Avatar from "../../images/Avatar.svg"
import Planning_icon from "../../images/Planning_icon.svg"
import Tasks_icon from "../../images/Tasks_icon.svg"
import Statistics_icon from "../../images/Statistics_icon.svg"

function Profile () {
    return <ProfileContainer>
        <div>
            <img src={Logo} alt="logo"/>
        </div>
        <AvatarUsernameContainer>
            <img src={Avatar} alt="avatar"/>
            <UsernameContainer>
                <Username>Ann Jonson</Username>
                <Status>Online</Status>
            </UsernameContainer>
        </AvatarUsernameContainer>
        <MenuContainer>
            <MenuItem>
                <MenuIcon src={Planning_icon} alt="Planning"/>
                Planning
            </MenuItem>
            <MenuItem>
                <MenuIcon src={Tasks_icon} alt="Tasks"/>
                Tasks for the day
            </MenuItem>
            <MenuItem>
                <MenuIcon src={Statistics_icon} alt="Statistics"/>
                Statistics
            </MenuItem>
        </MenuContainer>
    </ProfileContainer>
}

export default Profile;
