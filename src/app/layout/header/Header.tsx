import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchBox from "./SearchBox";
import logo from "../../../assets/logo.jpeg";
import Theme from "../../../theme/theme";

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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: ${Theme.colors.bg};
  height: 80px;
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;
const Menu = styled.div`
  position: relative;
  .fa-user {
    font-size: 45px;
    color: ${Theme.colors.white};
    margin-top: 10px;
    margin-left: 15px;
  }
`;
export default Header;
