import React from "react";
import { Emotions, TaskCategory, TimePeriod } from "../Store";
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

const TimePeriodContainer = styled(TaskFormLongColumnContainer)`
  margin: 30px 0;
`;

const StatisticsInfo = ({
  timePeriod,
  setTimePeriod,
  doneTasks,
  category,
  emotion,
  isMobile,
}: {
  timePeriod: TimePeriod;
  setTimePeriod: React.Dispatch<React.SetStateAction<TimePeriod>>;
  doneTasks: string;
  category: TaskCategory;
  emotion: Emotions;
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
            ([keyName, value]: [string, string]) => (
              <StatisticsCard
                key={uuid()}
                text={value}
                value={
                  keyName === "first"
                    ? doneTasks
                    : keyName === "second"
                    ? category
                    : emotion
                }
              />
            ),
          )}
        </StatisticsCardsContainer>
      )}
    </Container>
  );
};

export default StatisticsInfo;
