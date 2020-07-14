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
  font-size: ${({ size }) => (size ? size : "2rem")};
  color: ${({ color }) => (color ? color : Theme.colors.white)};
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

export const SemiHeader = styled.div`
  text-transform: uppercase;
  color: ${Theme.colors.white};
  font-size: 22px;
  padding: 0 15px;
`;

export const HeaderSmall = styled.div`
  text-transform: capitalize;
  color: ${Theme.colors.gray};
  font-size: 18px;
  padding: 0 15px;
`;

export const HeaderLarge = styled(SemiHeader)`
  font-size: 26px;
  text-transform: capitalize;
`;
export const FlexRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 5px 0;
`;

export const P = styled.p`
  font-size: 29px;
  padding: 0 15px;
  color: ${Theme.colors.gray};
`;
