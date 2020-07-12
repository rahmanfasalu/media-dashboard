import React from "react";
import { StyledNavLink, Fa } from "../../../theme/CommonStyles";
import styled from "styled-components";
import Theme from "../../../theme/theme";

const Footer = (): JSX.Element => (
  <FooterContainer>
    <StyledNavLink to="/home/landing">
      <Fa className="fa fa-home" size="3rem"></Fa>
    </StyledNavLink>
    <StyledNavLink to="/home/play">
      <Fa className="fa fa-play-circle"></Fa>
    </StyledNavLink>
    <StyledNavLink to="/home/dashboard" activeClassName="active">
      <Fa className="fa fa-list"></Fa>
    </StyledNavLink>
    <StyledNavLink to="/home/rewind">
      <Fa className="fa fa-history"></Fa>
    </StyledNavLink>
    <StyledNavLink to="/home/catalog">
      <Fa className="fa fa-book"></Fa>
    </StyledNavLink>
  </FooterContainer>
);

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
  background: ${Theme.colors.secondary};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  -webkit-box-shadow: 0px -4px 3px rgba(32, 32, 32, 1);
  -moz-box-shadow: 0px -4px 3px rgba(32, 32, 32, 1);
  box-shadow: 0px -4px 3px rgba(32, 32, 32, 1);
  z-index: 999;
  }
`;
export default Footer;
