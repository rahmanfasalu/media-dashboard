import React from "react";
import styled from "styled-components";
import { Fa, ContentCenter } from "src/theme/CommonStyles";
import Theme from "src/theme/theme";

/*
 *  Shared: SideBar
 *  Shared Sticky sidebar with icon || image. The content will be align in the center
 */

// Component type interface
interface SideBarType {
  image?: string;
  icon?: string;
  height?: number;
}
const SideBar = ({ image, icon, height }: SideBarType): JSX.Element => {
  return (
    <SideBarContainer sidebarHeight={height ?? 70}>
      {image && <Img src={image} alt="" />}
      {!image && icon && <Fa className={`${icon} fa`}></Fa>}
    </SideBarContainer>
  );
};

/*
 *  Styled Components
 */
const Img = styled.img`
  width: 50px;
  height: auto;
  max-height: 80%;
`;

const SideBarContainer = styled(ContentCenter)<{ sidebarHeight: number }>`
  width: 100px;
  background: ${Theme.colors.secondary};
  left: 0;
  box-shadow: 10px 0 10px 1px ${Theme.colors.primary};
  height: ${({ sidebarHeight }) =>
    sidebarHeight ? sidebarHeight + "px" : "70px"};
  z-index: 100;
  cursor: pointer;
  position: relative;
  margin-bottom: 1px;
`;

export default SideBar;
