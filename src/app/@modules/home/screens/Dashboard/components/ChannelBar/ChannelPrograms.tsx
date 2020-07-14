import React from "react";
import styled from "styled-components";
import ChannleShow from "./ChannelShow";
import { Schedule } from "src/app/interfaces/channels.type";

/*
 * Channel Programs Components
 *
 * Component will render each programs
 * Active program will highlighted in gray
 */
const ChannelPrograms = ({
  schedules,
}: {
  schedules: Schedule[];
}): JSX.Element => {
  return (
    <ChannelProgramsContainer>
      {schedules.map(
        (schedule: Schedule, index: number): JSX.Element => {
          return (
            <ChannleShow
              schedule={schedule}
              key={`ChannleShow_${index}`}
            ></ChannleShow>
          );
        }
      )}
    </ChannelProgramsContainer>
  );
};

/**
 *  Styles components
 */
const ChannelProgramsContainer = styled.div``;

export default ChannelPrograms;
