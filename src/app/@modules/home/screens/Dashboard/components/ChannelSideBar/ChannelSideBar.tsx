import React from "react";
import styled from "styled-components";
import { SideBar } from "src/app/shared";
import { Channels } from "src/app/interfaces/channels.type";

/*
 * Channel Side Component
 * This componet will render all channel sidebar,
 * This is moved out as a separate component instead of putting each side bar inside the
 * channel bar for maintainability
 *
 * Postion top calculated dynamically since channel bar will support dynamic height &&
 * Side bar position will be calculated by the show container offset + weekbar height
 */

/**
 *  Component props
 */
interface ChannelSideBarProp {
  channels: Channels[];
  top?: number; // for dynamic height poisitoning
}
const ChannelSideBar = ({ channels, top }: ChannelSideBarProp): JSX.Element => {
  console.log(top);
  return (
    <ChannelSideBarContainer top={top ? top + 53 : 225}>
      {channels.map(
        (channel: Channels, index: number): JSX.Element => {
          return (
            <SideBar image={channel.images.logo} key={`SideBar_${index}`} />
          );
        }
      )}
    </ChannelSideBarContainer>
  );
};

/**
 *  Styles components
 */
const ChannelSideBarContainer = styled.div<{ top: number }>`
  position: absolute;
  z-index: 999;
  top: ${({ top }) => top + "px"};
`;

export default ChannelSideBar;
