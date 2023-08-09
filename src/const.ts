import moment from "moment";
import { TimePeriod } from "./Store";

export interface InfoCardsType {
  first: string;
  second: string;
  third: string;
}

export const statisticsInfoCards: InfoCardsType = {
  first: "Your tasks were completed by ",
  second: "Most of the tasks you completed related to ",
  third: "For most tasks you finished, you felt ",
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
