import React from "react";
import styled from "styled-components";
import Theme from "../../../theme/theme";

/*
 *  Shared: Button
 *  Shared Button with name and callbal
 */

// Component props interface
interface ButtonProps {
  name: string;
  callback: () => void;
}

const Button = ({ name, callback }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      onClick={() => {
        callback();
      }}
    >
      Now
    </ButtonStyled>
  );
};

/*
 *  Styled Component
 */
const ButtonStyled = styled.button`
  border: none;
  background: ${Theme.colors.button};
  color: ${Theme.colors.white};
  padding: 10px 18px;
  width: auto;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  font-size: 20px;
  border-radius: 5px;
  &:hover {
    transform: translateY(-7px);
  }
`;

export default Button;
