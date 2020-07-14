import React from "react";
import styled from "styled-components";

import { getshowDuration } from "src/app/utils/dashboardUtil";
import Theme from "src/theme/theme";

/*
 *  Shared: ProgramBanner
 *  Program large banner with show duration
 */

// Component type interface
interface ProgramBannerType {
  image: string;
  start: string;
  end: string;
  title: string;
}
const ProgramBanner = ({
  image,
  title,
  start,
  end,
}: ProgramBannerType): JSX.Element => {
  const duration: string = getshowDuration(start, end);
  return (
    <ProgramBannerContainer>
      {/* For image and show duration */}
      <ImageWrapper>
        <Img src={image} alt={title}></Img>
        <Duration>{duration}</Duration>
        <div className="shadow"></div>
      </ImageWrapper>
    </ProgramBannerContainer>
  );
};

/*
 *  Styled Components
 */
const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;
const Duration = styled.div`
  position: absolute;
  z-index: 99;
  color: ${Theme.colors.white};
  right: 0;
  background-color: rgba(65, 62, 62, 0.65);
  padding: 5px 10px;
  width: 140px;
  font-size: 2rem;
  align-items: center;
`;
const Img = styled.img`
  max-width: 100%;
`;
const ProgramBannerContainer = styled.div`
  width: auto;
  text-align: center;
`;

export default ProgramBanner;
