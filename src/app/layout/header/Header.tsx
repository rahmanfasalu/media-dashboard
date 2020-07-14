import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchBox from "./SearchBox";
import logo from "../../../assets/logo.jpeg";
import Theme from "src/theme/theme";

/*
 *  Header Layout
 *  Application Header with icon, logo and search bar
 *
 */
const Header = (): JSX.Element => {
  const [, setQuery] = useState("");
  return (
    <HeaderContainer>
      <Menu>
        <Link to="/">
          <i className="fa fa-user"></i>
        </Link>
      </Menu>
      <Menu>
        <Logo src={logo} alt="logo"></Logo>
      </Menu>

      <Menu>
        <SearchBox setQuery={setQuery} />
      </Menu>
    </HeaderContainer>
  );
};

/*
 *  Styled components
 */
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  height: 80px;
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999;
`;

const Logo = styled.img`
  width: 80px;
  height: 60px;
`;
const Menu = styled.div`
  .fa-user {
    font-size: 45px;
    color: ${Theme.colors.white};
    margin-top: 10px;
    margin-left: 15px;
  }
`;
export default Header;
