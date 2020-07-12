import React from "react";
import styled from "styled-components";
import { Channels } from "../../../../../../interfaces/channels.type";
import { SideBar } from "../../../../../../shared";
import Theme from "../../../../../../../theme/theme";
import ChannelPrograms from "./ChannelPrograms";

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
  return (
    <ChannelContainer>
      {channels.map(
        (channel: Channels, index: number): JSX.Element => {
          return (
            <Channel key={`Channel_${index}`}>
              <SideBar image={channel.images.logo} key={`SideBar_${index}`} />
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
const Channel = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 0;
  height: 68px;
  position: relative;
  background: ${Theme.colors.bg};
  border-bottom: 1px solid ${Theme.colors.gray};
`;

export default ChannelBar;
