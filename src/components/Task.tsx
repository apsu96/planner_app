import { useState } from "react";
import { Emotions, ToDoType } from "../Store";
import {
  CustomSelect,
  CustomOption,
  StyledBadgesContainer,
  TaskContainer,
  TaskInfoContainer,
  OptionContainer,
} from "./TaskList.styled";
import {
  ActionIcon,
  MoveButton,
  SmallButton,
  SmallText,
  Text,
} from "./UIKit.styled";
import { SelectOption } from "@mui/base";
import PlayIcon from "../images/PlayIcon.png";
import MoodIcon from "@mui/icons-material/Mood";
import { useMediaQuery } from "@mui/material";

const Task = ({ toDo }: { toDo: ToDoType }) => {
  const hours = Math.floor(toDo.duration.estimated / 60);
  const minutes = toDo.duration.estimated - hours * 60;
  const [emotions, setEmotions] = useState<Emotions | null | undefined>();
  const isMobile = useMediaQuery("(max-width:820px)");

  function renderValue(option: SelectOption<any> | null | SelectOption<any>[]) {
    if (!isMobile) {
      if (option == null) {
        return "Emotion";
      } else {
        return emotions;
      }
    } else {
      if (option == null) {
        return <MoodIcon />;
      } else {
        return <MoodIcon />;
      }
    }
  }

  return (
    <TaskContainer>
      <MoveButton />
      <TaskInfoContainer>
        <Text>{toDo.taskDescription}</Text>
        {!isMobile ? (
          <SmallText>
            {toDo.category} ({hours ? `${hours} h` : null}{" "}
            {minutes ? `${minutes} min` : null})
          </SmallText>
        ) : null}
      </TaskInfoContainer>
      <StyledBadgesContainer>
        <SmallText>00:00:00</SmallText>
        <ActionIcon src={PlayIcon} alt="play" />
        <CustomSelect
          label="Emotion"
          value={emotions}
          onChange={(_, value) => setEmotions(value as Emotions)}
          slots={{ listbox: OptionContainer, root: "button" }}
          renderValue={renderValue}
        >
          <CustomOption value={Emotions.Excellent}>
            {isMobile ? <MoodIcon /> : Emotions.Excellent}
          </CustomOption>
          <CustomOption value={Emotions.Normal}>
            {isMobile ? <MoodIcon /> : Emotions.Normal}
          </CustomOption>
          <CustomOption value={Emotions.Bad}>
            {isMobile ? <MoodIcon /> : Emotions.Bad}
          </CustomOption>
        </CustomSelect>
        <SmallButton>Finish</SmallButton>
      </StyledBadgesContainer>
    </TaskContainer>
  );
};

export default Task;
