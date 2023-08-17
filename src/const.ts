import moment from "moment";
import { TimePeriod } from "./Store";

export interface InfoCardsType {
  performance: {
    text: string;
  };
  taskCategory: {
    text: string;
    equalText: string;
  };
  emotion: {
    text: string;
  };
}

export const statisticsInfoCards: InfoCardsType = {
  performance: {
    text: "Your tasks were completed by ",
  },
  taskCategory: {
    text: "Most of the tasks you completed related to ",
    equalText: "You were equally active in work and leisure.",
  },
  emotion: {
    text: "While performing tasks, you mostly felt ",
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
