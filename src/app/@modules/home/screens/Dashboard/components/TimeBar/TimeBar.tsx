import React from "react";
import styled from "styled-components";
import Theme from "src/theme/theme";
import useWindowDimensions from "src/app/hooks/useWindowDimensions";

/*
 * Time Bar Component
 *
 * Component will render the Timeline based on the hoursize props.
 * Each hour size is calcualted based on the hoursize and actual hour
 */

/**
 *  Styled components props
 */
interface TimeLabelProps {
  left: number;
}

const TimeBar = () => {
  const { hourSize } = useWindowDimensions();
  return <TimeBarContainer>{getTimeText(hourSize)}</TimeBarContainer>;
};

/**
 *  Helper function to render time
 */
const getTimeText = (hourSize: number): JSX.Element[] => {
  const Time: JSX.Element[] = [];
  for (let hour: number = 1; hour < 24; hour++) {
    let fomatedHour: string = hour < 9 ? "0" + hour + ":00" : hour + ":00";
    Time.push(
      <TimeLabel key={fomatedHour} left={hour * hourSize}>
        {fomatedHour}
      </TimeLabel>
    );
  }
  return Time;
};

/**
 *  Styled Components
 */
const TimeLabel = styled.div<TimeLabelProps>`
  left: ${({ left }) => {
    return left + "px";
  }};
  position: absolute;
  color: ${Theme.colors.white};
`;
const TimeBarContainer = styled.div`
  cursor: pointer;
  padding: 15px 0px;
  height: 23px;
  position: relative;
  background: ${Theme.colors.secondary};
  border-top: 1px solid ${Theme.colors.gray};
  border-bottom: 1px solid ${Theme.colors.gray};
`;

export default TimeBar;
