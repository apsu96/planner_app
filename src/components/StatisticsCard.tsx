import {
  ColorText,
  LongMoveButton,
  StatisticsCardContainer,
  Text,
} from "./UIKit.styled";

const StatisticsCard = ({
  text,
  value,
}: {
  text: string;
  value: string | undefined;
}) => {
  return value ? (
    <StatisticsCardContainer>
      <LongMoveButton />
      <Text>
        {text} <ColorText>{value}</ColorText>
      </Text>
    </StatisticsCardContainer>
  ) : null;
};

export default StatisticsCard;
