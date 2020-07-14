import React from "react";
import styled from "styled-components";
import ChannelPrograms from "./ChannelPrograms";
import { Channels } from "src/app/interfaces/channels.type";
import Theme from "src/theme/theme";
import { CHANNEL_BAND_HEIGHT } from "src/app/constants/dashboardConstants";

/*
 * Channel Bar Component
 *
 * Component will render the all the programs based props channels.
 * Programs size is calcualted bases on the hour size.
 */

/**
 *  Component props
 */
interface ChannelProp {
  channels: Channels[];
}
const ChannelBar = ({ channels }: ChannelProp): JSX.Element => {
  const ChannelBarHeight = CHANNEL_BAND_HEIGHT ?? 68;
  return (
    <ChannelContainer>
      {channels.map(
        (channel: Channels, index: number): JSX.Element => {
          return (
            <Channel key={`Channel_${index}`} height={ChannelBarHeight}>
              <ChannelPrograms
                schedules={channel.schedules}
                key={`Programs_${index}`}
              />
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
