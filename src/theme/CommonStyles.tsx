import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Theme from "./theme";
interface FaProps {
  size?: string;
  color?: string;
}
const activenavlinkclass = "active";
export const StyledNavLink = styled(NavLink).attrs({
  activenavlinkclass,
})`
  &.${activenavlinkclass} {
    .fa {
      color: ${Theme.colors.active};
    }
  }
`;

export const DisableScrollBar = styled.div`
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }
`;

export const Fa = styled.i<FaProps>`
  font-size: ${({ size }) => {
    return size ? size : "2rem";
  }};
  color: ${({ color }) => {
    return color ? color : Theme.colors.white;
  }};
`;

export const ContentCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScreenContainer = styled(ContentCenter)`
  height: 72%;
  position: absolute;
  width: calc(100%-160px);
  color: #545454;
  width: 100%;
  font-size: 3rem;
`;
