import React from "react";
import styled from "styled-components";

import Theme from "src/theme/theme";
import { StyledNavLink, Fa } from "src/theme/CommonStyles";

/*
 *  Footer Layout
 *  Application Footer child nav link
 *  Child lick used as
 *    - Landing : Home page landing screen
 *    - Play : Home page play screen
 *    - Rewind : Home page rewind screen
 *    - Catalog : Home page catalog screen
 *    - Dashboard : Streaming info page
 */

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

/*
 *  Styled components
 */
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
