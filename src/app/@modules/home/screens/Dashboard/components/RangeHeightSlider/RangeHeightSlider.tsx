import React from "react";
import styled from "styled-components";
import Theme from "src/theme/theme";

/*
 *  Shared: Range Slider
 *  Dynamic height for the channle bar
 */
const RangeHeightSlider = ({
  barHeight,
  setBarHeight,
}: {
  barHeight: number;
  setBarHeight: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  return (
    <RangeSliderWrapper>
      <Label>Channel Height :</Label>
      <RangeInput
        type="range"
        min="70"
        max="250"
        value={barHeight}
        onChange={(e) => setBarHeight(parseInt(e.target.value))}
      />
    </RangeSliderWrapper>
  );
};

const RangeSliderWrapper = styled.div`
  position: absolute;
  z-index: 2000;
  top: 73px;
  right: 2rem;
`;

const RangeInput = styled.input`
  cursor: pointer;
  padding: 0;
`;

const Label = styled.label`
  color: ${Theme.colors.white};
  float: left;
`;

export default RangeHeightSlider;
