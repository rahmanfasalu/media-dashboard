import React from "react";
import styled from "styled-components";

import { getshowDuration } from "src/app/utils/dashboardUtil";
import Theme from "src/theme/theme";
import { ProgramInfo } from "src/app/interfaces/programs.details.type";
import {
  SemiHeader,
  HeaderSmall,
  FlexRow,
  HeaderLarge,
} from "src/theme/CommonStyles";

/*
 *  Shared: ProgramTitle
 *  Program title with channle name, duration, day, program titlee,
 *  year and genre
 */

const ProgramHeader = ({
  channelTitle,
  start,
  end,
  title,
  meta,
}: ProgramInfo): JSX.Element => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const startDate = new Date(start);
  const endDate = new Date(end);

  return (
    <ProgramHeaderContainer>
      <FlexRow>
        <SemiHeader>{channelTitle}</SemiHeader>
        <HeaderSmall>
          {startDate.getHours() +
            ":" +
            startDate.getMinutes() +
            " - " +
            endDate.getHours() +
            ":" +
            endDate.getMinutes() +
            " -" +
            startDate.getDate() +
            " " +
            months[startDate.getMonth()]}
        </HeaderSmall>
      </FlexRow>
      <FlexRow>
        <HeaderLarge>{title}</HeaderLarge>
      </FlexRow>
      <FlexRow>
        <HeaderSmall>{meta?.year}</HeaderSmall>
        {meta?.genres?.map((genre, index) => (
          <HeaderSmall key={`genre_${index}`}>{genre}</HeaderSmall>
        ))}
      </FlexRow>
    </ProgramHeaderContainer>
  );
};

/*
 *  Styled Components
 */
const ProgramHeaderContainer = styled.div`
  width: auto;
  padding: 10px 0;
`;

export default ProgramHeader;
