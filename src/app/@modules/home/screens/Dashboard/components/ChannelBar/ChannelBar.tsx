import React from "react";
import styled from "styled-components";
import { Channels, Schedule } from "src/app/interfaces/channels.type";
import Theme from "src/theme/theme";
import ChannleShow from "./ChannelShow";
import { useHistory } from "react-router-dom";

import useWindowDimensions from "src/app/hooks/useWindowDimensions";
/*
 * Channel Bar Component
 *
 * Component will render the all the programs based props channels.
 * Programs size is calcualted bases on the hour size.
 *
 */

/**
 *  Component props
 */
interface ChannelProp {
  channels: Channels[];
  height: number;
}
const ChannelBar = ({ channels, height }: ChannelProp): JSX.Element => {
  const history = useHistory();
  const { hourSize } = useWindowDimensions();
  return (
    <ChannelContainer>
      {channels.map(
        (channel: Channels, index: number): JSX.Element => {
          return (
            <Channel height={height} key={`Channel_${index}`}>
              {channel.schedules.map(
                (schedule: Schedule, index: number): JSX.Element => {
                  return (
                    <ChannleShow
                      history={history}
                      hourSize={hourSize}
                      schedule={schedule}
                      key={`ChannleShow_${index}`}
                    ></ChannleShow>
                  );
                }
              )}
            </Channel>
          );
        }
      )}
    </ChannelContainer>
  );
};

/**
 *  Styles components
 */
const ChannelContainer = styled.div`
  position: relative;
  z-index: 90;
`;
const Channel = styled.div<{ height: number }>`
  width: 100%;
  cursor: pointer;
  padding: 0;
  height: ${({ height }) => height + "px"};
  position: relative;
  background: ${Theme.colors.bg};
  border-bottom: 1px solid ${Theme.colors.gray};
`;

export default ChannelBar;
