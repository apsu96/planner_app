import React from "react";
import { TimePeriod } from "../Store";
import { TaskFormLongColumnContainer } from "./TaskForm.styled";
import {
  Container,
  StatisticsCardsContainer,
  Text,
  Title,
} from "./UIKit.styled";
import Select from "./Select";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import StatisticsCard from "./StatisticsCard";
import { CardType, statisticsInfoCards } from "../const";
import uuid from "react-uuid";

const TimePeriodContainer = styled(TaskFormLongColumnContainer)`
  margin: 30px 0;
`;

const StatisticsInfo = ({
  timePeriod,
  setTimePeriod,
}: {
  timePeriod: TimePeriod;
  setTimePeriod: React.Dispatch<React.SetStateAction<TimePeriod>>;
}) => {
  const isMobile = useMediaQuery("(max-width:820px)");
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
            ([, value]: [string, CardType]) => (
              <StatisticsCard
                key={uuid()}
                text={value.text}
                value={value.value}
              />
            ),
          )}
        </StatisticsCardsContainer>
      )}
    </Container>
  );
};

export default StatisticsInfo;
