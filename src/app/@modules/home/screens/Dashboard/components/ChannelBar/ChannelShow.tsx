import React from "react";

import { Schedule } from "../../../../../../interfaces/channels.type";
import Theme from "../../../../../../../theme/theme";

import {
  getMinuteSize,
  getShowLength,
  getShowStartPoint,
  isActiveShow,
  formatedTime,
} from "../../../../../../utils/dashboard.util";
import useWindowDimensions from "../../../../../../hooks/useWindowDimensions";

/*
 * Interface
 *
 * Styled component props
 */
interface ShowStyledProps {
  left: number;
  width: number;
  active: boolean;
}

/*
 * Show Components
 *
 * For render single show
 */
const ChannleShow = ({ schedule }: { schedule: Schedule }): JSX.Element => {
  // get the hoursize based on the screen size;
  const { hourSize } = useWindowDimensions();
  const miunteSize: number = getMinuteSize(hourSize);
  const left: number = getShowStartPoint(miunteSize, schedule.start);
  const width: number = getShowLength(miunteSize, schedule.start, schedule.end);
  const active: boolean = isActiveShow(schedule.start, schedule.end);

  return (
    // Prefer inline styles for better performance over styled component
    <div
      style={{
        position: "absolute",
        left: left + "px",
        width: width + "px",
        background: active ? Theme.colors.show : Theme.colors.bg,
        zIndex: 10,
        height: "68px",
      }}
    >
      <div
        style={{
          padding: "5px 0 0 5px",
          color: Theme.colors.white,
          width: "100%",
        }}
      >
        {schedule.title}
      </div>
      <div
        style={{
          padding: "5px 0 0 5px",
          color: Theme.colors.gray,
        }}
      >{`${formatedTime(schedule.start)} - 
      ${formatedTime(schedule.end)}`}</div>
    </div>
  );
};

export default ChannleShow;
