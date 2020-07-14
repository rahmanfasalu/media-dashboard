import React from "react";
import styled from "styled-components";
import { SideBar } from "src/app/shared";
import WeekDays from "src/app/interfaces/weekdays.type";
import Theme from "src/theme/theme";
import { getWeekDays } from "src/app/utils/dashboardUtil";

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
      <WeekBarContainer height={70}>
        <SideBar icon="fa-star" height={70} />
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
const WeekBarContainer = styled.div<{ height: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Theme.colors.secondary};
  padding: 0;
  position: relative;
  height: ${(height) => height + "px"};
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
