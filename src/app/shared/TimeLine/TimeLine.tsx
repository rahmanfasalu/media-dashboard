import React from "react";
import styled from "styled-components";
import useCurrentTimeInMinutes from "src/app/hooks/useCurrentTimeInMinutes";
import useWindowDimensions from "src/app/hooks/useWindowDimensions";
import Theme from "src/theme/theme";

/*
 *  Shared: TimeLine
 *  Time Line Component, this is an indicator for the current time. This will change
 *  the position in every 1 minute
 */

interface TimelineStyledProps {
  left: number;
}
const TimeLine = (): JSX.Element => {
  const { minute } = useCurrentTimeInMinutes();
  const { hourSize } = useWindowDimensions();
  const left: number = minute * (hourSize / 60);
  return (
    <TimeLineContainer left={left}>
      <TimeLineHead></TimeLineHead>
      <TimeLineTail></TimeLineTail>
    </TimeLineContainer>
  );
};

/*
 *  Styled Components
 */
const TimeLineContainer = styled.div<TimelineStyledProps>`
  width: 6px;
  top: 0;
  bottom: 50px;
  position: absolute;
  z-index: 150;
  transition: left 1s cubic-bezier(0, 0, 1, 1) 500ms;
  left: ${({ left }) => (left ? `${left}px` : 0)};
`;

const TimeLineHead = styled.div`
  width: 5px;
  background: ${Theme.colors.button};
  height: 54px;
  border-radius: 2px;
  position: absolute;
`;

const TimeLineTail = styled.div`
  height: 100%;
  background: ${Theme.colors.button};
  width: 2px;
  margin-left: 1px;
  position: absolute;
`;

export default TimeLine;
