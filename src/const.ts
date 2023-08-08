import moment from "moment";
import { TimePeriod } from "./Store";

export interface CardType {
  text: string;
  value: string;
}

export interface InfoCardsType {
  first: CardType;
  second: CardType;
  third: CardType;
}

export const statisticsInfoCards: InfoCardsType = {
  first: {
    text: "Your tasks were completed by ",
    value: "",
  },
  second: {
    text: "Most of the tasks you completed related to ",
    value: "",
  },
  third: {
    text: "For most tasks you finished, you felt ",
    value: "",
  },
};

export function getTargetDay(period: TimePeriod) {
  if (period === TimePeriod.LastWeek) {
    return moment().subtract("7", "days");
  } else if (period === TimePeriod.LastMonth) {
    return moment().subtract("1", "month");
  } else if (period === TimePeriod.LastYear) {
    return moment().subtract("1", "year");
  }
}
