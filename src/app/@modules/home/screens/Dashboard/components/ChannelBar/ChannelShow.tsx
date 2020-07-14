import React from "react";

import { useHistory } from "react-router-dom";
import useWindowDimensions from "src/app/hooks/useWindowDimensions";
import {
  getMinuteSize,
  getShowStartPoint,
  getShowLength,
  isActiveShow,
  formatedTime,
} from "src/app/utils/dashboardUtil";
import { Schedule } from "src/app/interfaces/channels.type";
import Theme from "src/theme/theme";

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
  const history = useHistory();
  const miunteSize: number = getMinuteSize(hourSize);
  const left: number = getShowStartPoint(miunteSize, schedule.start);
  const width: number = getShowLength(miunteSize, schedule.start, schedule.end);
  const active: boolean = isActiveShow(schedule.start, schedule.end);

  const viewDetails = () => {
    let path = `/show/${schedule.id}`;
    history.push(path);
  };

  return (
    // Prefer inline styles for better performance over styled component
    <div
      onClick={viewDetails}
      style={{
        position: "absolute",
        left: left + "px",
        width: width - 1 + "px",
        background: active ? Theme.colors.show : Theme.colors.bg,
        zIndex: 10,
        height: `100%`,
        borderRight: `1px solid ${Theme.colors.gray}`,
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
