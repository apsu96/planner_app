import React from "react";
import store, { TimePeriod } from "../Store";
import { TaskFormLongColumnContainer } from "./TaskForm.styled";
import {
  Container,
  StatisticsCardsContainer,
  Text,
  Title,
} from "./UIKit.styled";
import Select from "./Select";
import styled from "styled-components";
import StatisticsCard from "./StatisticsCard";
import { statisticsInfoCards } from "../const";
import uuid from "react-uuid";
import { observer } from "mobx-react-lite";

const TimePeriodContainer = styled(TaskFormLongColumnContainer)`
  margin: 30px 0;
`;

const StatisticsInfo = observer(
  ({
    timePeriod,
    setTimePeriod,
    doneTasks,
    category,
    emotions,
    isMobile,
  }: {
    timePeriod: TimePeriod;
    setTimePeriod: React.Dispatch<React.SetStateAction<TimePeriod>>;
    doneTasks: string | undefined;
    category: string | undefined;
    emotions: string | undefined;
    isMobile: boolean;
  }) => {
    return (
      <Container>
        <Title>Take a moment to examine your progress</Title>
        <TimePeriodContainer>
          <Text>Time period</Text>
          <Select
            values={Object.values(TimePeriod)}
            value={timePeriod}
            setValue={(value: TimePeriod) => setTimePeriod(value)}
            renderValue={null}
            disabled={false}
            variant="taskForm"
          />
        </TimePeriodContainer>
        {!isMobile && (
          <StatisticsCardsContainer>
            {Object.entries(statisticsInfoCards).map(
              ([keyName, value]: [
                string,
                { text: string; equalText?: string },
              ]) => (
                <StatisticsCard
                  key={uuid()}
                  text={
                    keyName === "taskCategory" &&
                    category === "both" &&
                    value.equalText
                      ? value.equalText
                      : value.text
                  }
                  value={
                    keyName === "performance"
                      ? doneTasks
                      : keyName === "taskCategory" && category === "both"
                      ? " "
                      : keyName === "taskCategory"
                      ? category
                      : emotions
                  }
                />
              ),
            )}
          </StatisticsCardsContainer>
        )}
        {store.toDoList.length === 0 && (
          <Text>You haven&apos;t started planning any tasks yet.</Text>
        )}
      </Container>
    );
  },
);

export default StatisticsInfo;
