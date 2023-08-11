import moment from "moment";
import { TimePeriod } from "./Store";

export interface InfoCardsType {
  performance: string;
  taskCategory: string;
  equalTaskCategory: string;
  emotion: string;
}

export const statisticsInfoCards: InfoCardsType = {
  performance: "Your tasks were completed by ",
  taskCategory: "Most of the tasks you completed related to ",
  equalTaskCategory: "You're equally active in work and leisure.",
  emotion: "For most tasks you finished, you felt ",
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
