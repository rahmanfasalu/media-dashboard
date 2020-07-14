import React, { useState } from "react";
import styled from "styled-components";
import Theme from "src/theme/theme";

/*
 *  Shared: Tabs Using Styled Component
 *  Custom tab bat using styled component
 */

interface TabPropsStyled {
  active?: boolean;
}
interface TabProps {
  tabHeads: string[];
  tabcontents: JSX.Element[];
}
function Tabs({ tabHeads, tabcontents }: TabProps) {
  const [active, setActive] = useState(0);

  const handleClick = (index: number) => {
    if (index !== active) {
      setActive(index);
    }
  };

  return (
    <>
      <TabsHeaderContainer>
        {tabHeads?.map((head, index) => (
          <TabHeader
            key={`tabH_${index}`}
            onClick={() => {
              handleClick(index);
            }}
            active={active === index}
          >
            {head}
          </TabHeader>
        ))}
      </TabsHeaderContainer>
      <TabsContentContainer>
        {tabcontents?.map((content, index) => (
          <TabContent active={active === index} key={`tabContent_${index}`}>
            {content}
          </TabContent>
        ))}
      </TabsContentContainer>
    </>
  );
}
export const TabsHeaderContainer = styled.div``;

export const TabHeader = styled.div<TabPropsStyled>`
  cursor: pointer;
  position: relative;
  border: 1px solid ${Theme.colors.gray};
  transition: background-color 0.5s ease-in-out;
  color: ${Theme.colors.white};
  float: left;
  font-size: 18px;
  padding: 8px;
  margin-right: 10px;
  background: ${({ active }) => (active ? Theme.colors.gray : "")};
`;

export const TabContent = styled.div<TabPropsStyled>`
  ${({ active }) => (active ? "" : "display:none")};
  color: ${Theme.colors.white};
  width: 80%;
`;

const TabsContentContainer = styled.div`
  width: 100%;
  float: left;
`;
export default Tabs;
