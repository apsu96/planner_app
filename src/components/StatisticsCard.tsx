import {
  ColorText,
  LongMoveButton,
  StatisticsCardContainer,
  Text,
} from "./UIKit.styled";

const StatisticsCard = ({ text, value }: { text: string; value: string }) => {
  return (
    <StatisticsCardContainer>
      <LongMoveButton />
      <Text>
        {text} <ColorText>{value}</ColorText>
      </Text>
    </StatisticsCardContainer>
  );
};

export default StatisticsCard;
