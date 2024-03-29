import { useEffect, useState } from "react";
import store, { Emotions, ToDoType } from "../Store";
import {
  StyledBadgesContainer,
  TaskContainer,
  TaskInfoContainer,
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
import Select from "./Select";

const Task = observer(({ toDo, index }: { toDo: ToDoType; index: number }) => {
  const [emotion, setEmotion] = useState<Emotions | null | undefined>(
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
        return emotion;
      }
    } else {
      if (option == null) {
        return <MoodIcon />;
      } else if (emotion === Emotions.Excellent) {
        return <MoodIcon />;
      } else if (emotion === Emotions.Normal) {
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

  function selectValue(value: any) {
    setEmotion(value as Emotions);
    store.setEmotions(toDo.id, value as Emotions);
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
            {toDo.category} (
            {toDo.duration.estimated.hours
              ? `${toDo.duration.estimated.hours} h`
              : null}{" "}
            {toDo.duration.estimated.minutes
              ? `${toDo.duration.estimated.minutes} min`
              : null}
            )
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
        <Select
          values={Object.values(Emotions)}
          value={emotion}
          setValue={selectValue}
          renderValue={renderValue}
          disabled={isDone}
        />
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
