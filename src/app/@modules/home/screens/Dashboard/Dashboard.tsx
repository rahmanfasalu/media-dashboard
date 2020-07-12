import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { WeekBar, TimeBar, ChannelBar } from "./components";
import {
  getScrollableBarWidth,
  currentShowScreenPosition,
} from "../../../../utils/dashboard.util";
import { DisableScrollBar } from "../../../../../theme/CommonStyles";
import { Channels } from "../../../../interfaces/channels.type";
import { AppStateType } from "../../../../interfaces/app.state.type";
import { loadChannelData } from "../../../../stor/actions/channelActions";
import TimeLine from "../../../../shared/TimeLine/TimeLine";
import useWindowDimensions from "../../../../hooks/useWindowDimensions";
import { Button } from "../../../../shared";

/*
 *  Screen Dashboard
 *
 *  Dashboard screen with channels and programs info
 *  Component used in this moduels are
 *    - WeekBar : For rendering week days.
 *    - TimeBar : For rendering Timline of 0-24 hour, hour length is calculated based on the
 *                hoursize, default hour size is 300px.
 *    - ChannelBar : For rendering channled and programs info.
 *
 */

/*
 *  Styled Components interface
 */
interface StreanContainerProps {
  width: string;
}
function Dashboard(): JSX.Element {
  const dispatch = useDispatch();
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // get the hoursize based on the screen size;
  const { hourSize, width: currentScreenWidth } = useWindowDimensions();

  // channel selector from App state
  const channels: Channels[] = useSelector((state: AppStateType) => {
    return state.channels;
  });

  /*
   *  Scroll to current show position
   *
   *  function will calcualte the position of the current show and scroll the screen to the
   *  same position
   */
  const scrollToTheCurrntShow = () => {
    if (channels && containerRef && containerRef.current) {
      containerRef.current.scrollLeft = currentShowScreenPosition(
        hourSize,
        currentScreenWidth
      );
    }
  };

  // React hook to fetch channle data
  useEffect(() => {
    dispatch(loadChannelData());
  }, []);

  // React hook to scroll to the current show position, if the hoursize or channles data changed
  useEffect(() => {
    scrollToTheCurrntShow();
  }, [channels, hourSize]);

  return (
    <DashboardContainer>
      <WeekBar />
      <ButtonWrapper>
        <Button name="Now" callback={scrollToTheCurrntShow} />
      </ButtonWrapper>
      <ProgramContainer ref={containerRef}>
        <StreamContainer width={`${getScrollableBarWidth(hourSize)}px`}>
          {/* 
            Realtime timeline, position will change everyminute
           */}
          <TimeLine></TimeLine>

          {/* 
            Time Header with 00 to 23, each hour size is calculated based on the screen size. 
           */}
          <TimeBar></TimeBar>

          {/* Channel data */}
          <ChannelBar channels={channels}></ChannelBar>
          <br />
        </StreamContainer>
      </ProgramContainer>
    </DashboardContainer>
  );
}

/*
 *  Styled Components
 */
const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  z-index: 999;
`;
const DashboardContainer = styled.div``;
const ProgramContainer = styled(DisableScrollBar)`
  overflow: scroll;
  position: relative;
  scroll-behavior: smooth;
`;
const StreamContainer = styled(DisableScrollBar)<StreanContainerProps>`
  width: ${({ width }) => {
    return width ? width : "7200px";
  }};
  padding-bottom: 30px;
`;
export default Dashboard;