import { useEffect, useState } from "react";
import store, { Emotions, ToDoType } from "../Store";
import {
  CustomSelect,
  CustomOption,
  StyledBadgesContainer,
  TaskContainer,
  TaskInfoContainer,
  OptionContainer,
  EditButton,
} from "./TaskList.styled";
import {
  ActionIcon,
  IconWrapperButton,
  MoveButton,
  SmallButton,
  SmallText,
  Text,
} from "./UIKit.styled";
import { SelectOption } from "@mui/base";
import PlayIcon from "../images/PlayIcon.png";
import PauseIcon from "../images/PauseIcon.png";
import MoodIcon from "@mui/icons-material/Mood";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useMediaQuery } from "@mui/material";
import { observer } from "mobx-react-lite";

const Task = observer(({ toDo, index }: { toDo: ToDoType; index: number }) => {
  const hours = Math.floor(toDo.duration.estimated / 60);
  const minutes = toDo.duration.estimated - hours * 60;
  const [emotions, setEmotions] = useState<Emotions | null | undefined>(
    toDo.emotionalState,
  );
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [realDuration, setRealDuration] = useState(
    store.toDoList[index]?.duration.real,
  );
  const [isDone, setIsDone] = useState(toDo.isDone);
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
      } else if (emotions === Emotions.Excellent) {
        return <MoodIcon />;
      } else if (emotions === Emotions.Normal) {
        return <SentimentSatisfiedIcon />;
      } else {
        return <SentimentVeryDissatisfiedIcon />;
      }
    }
  }

  function timerView() {
    let hours: string | number = Math.floor(realDuration / 36000);
    let minutes: string | number = Math.floor(
      (realDuration - hours * 36000) / 60,
    );
    let seconds: string | number = realDuration - minutes * 60;
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
  }

  function toggleCompleteButton(isDone: boolean) {
    setTimerEnabled(false);
    setIsDone(isDone);
    store.setTaskStatus(toDo.id, isDone);
  }

  useEffect(() => {
    let duration = realDuration;
    const timerId = setInterval(() => {
      duration += 1;
      store.updateRealDuration(toDo.id, duration);
      setRealDuration((realDuration) => realDuration + 1);
    }, 1000);
    if (!timerEnabled) {
      clearInterval(timerId);
    }

    return () => {
      clearInterval(timerId);
    };
  }, [timerEnabled]);

  return (
    <TaskContainer isDone={isDone}>
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
        <SmallText>{timerView()}</SmallText>
        {timerEnabled ? (
          <IconWrapperButton onClick={() => setTimerEnabled(false)}>
            <ActionIcon src={PauseIcon} alt="pause" disable={isDone} />
          </IconWrapperButton>
        ) : (
          <IconWrapperButton
            disabled={isDone}
            onClick={() => setTimerEnabled(true)}
          >
            <ActionIcon src={PlayIcon} alt="play" disable={isDone} />
          </IconWrapperButton>
        )}
        <CustomSelect
          label="Emotion"
          value={emotions}
          onChange={(_, value) => {
            setEmotions(value as Emotions);
            store.setEmotions(toDo.id, value as Emotions);
          }}
          slots={{ listbox: OptionContainer, root: "button" }}
          renderValue={renderValue}
          disabled={isDone}
        >
          <CustomOption value={Emotions.Excellent}>
            {Emotions.Excellent}
          </CustomOption>
          <CustomOption value={Emotions.Normal}>{Emotions.Normal}</CustomOption>
          <CustomOption value={Emotions.Bad}>{Emotions.Bad}</CustomOption>
        </CustomSelect>
        {!isDone ? (
          <SmallButton onClick={() => toggleCompleteButton(true)}>
            Finish
          </SmallButton>
        ) : (
          <EditButton onClick={() => toggleCompleteButton(false)}>
            Edit
          </EditButton>
        )}
      </StyledBadgesContainer>
    </TaskContainer>
  );
});

export default Task;
