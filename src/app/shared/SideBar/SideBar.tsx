import React from "react";
import styled from "styled-components";

import { Fa, ContentCenter } from "../../../theme/CommonStyles";
import Theme from "../../../theme/theme";

/*
 *  Shared: SideBar
 *  Shared Sticky sidebar with icon || image. The content will be align in the center
 */

// Component type interface
interface SideBarType {
  image?: string;
  icon?: string;
}
const SideBar = ({ image, icon }: SideBarType): JSX.Element => {
  return (
    <SideBarContainer>
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

const SideBarContainer = styled(ContentCenter)`
  width: 100px;
  position: sticky;
  background: ${Theme.colors.secondary};
  left: 0;
  box-shadow: 10px 0 10px 1px ${Theme.colors.primary};
  height: 68px;
  top: 0;
  z-index: 100;
  float: left;
  cursor: pointer;
`;

export default SideBar;
