import React from "react";
import styled from "styled-components";

import { SideBar } from "../../../../../../shared";
import { getWeekDays } from "../../../../../../utils/dashboard.util";
import WeekDays from "../../../../../../interfaces/weekdays.type";
import Theme from "../../../../../../../theme/theme";

/*
 * WeekBar Component
 *
 * Component will render the Weekdays.
 * Current day will be highlighted in white, others in gray. component using utility funciton getWeekDays()
 * to get the weekdays
 */

/**
 *  Styled components props
 */
interface WeekDaysProps {
  active?: boolean;
}

const WeekBar = (): JSX.Element => {
  const weekDays: WeekDays[] = getWeekDays();
  const currDay: string = new Date().toString().split(" ")[0];

  return (
    <div>
      <WeekBarContainer>
        <SideBar icon="fa-star" />
        {weekDays.map((weekday: WeekDays) => {
          return (
            <WeekDaysContainer
              key={weekday.name}
              active={
                currDay.toLocaleLowerCase() === weekday.name.toLocaleLowerCase()
              }
            >
              <WeekLabel>{weekday.name}</WeekLabel>
              <WeekLabel>{weekday.date}</WeekLabel>
            </WeekDaysContainer>
          );
        })}
      </WeekBarContainer>
    </div>
  );
};

/**
 *  Styled components
 */
const WeekBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Theme.colors.secondary};
  padding: 0;
  position: relative;
  height: 70px;
`;

const WeekDaysContainer = styled.div<WeekDaysProps>`
  flex: 1;
  text-align: center;
  color: ${({ active }) => {
    return active ? Theme.colors.white : Theme.colors.gray;
  }};
`;

const WeekLabel = styled.div``;

export default WeekBar;
