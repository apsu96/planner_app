import { ChartType } from "chart.js";

declare module "chart.js" {
  interface PluginOptionsByType<TType extends ChartType> {
    empty: {
      color?: string;
      width?: number;
      radiusDecrease?: number;
    };
  }
}
