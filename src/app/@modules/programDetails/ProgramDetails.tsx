import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { loadProgramDetailsActions } from "src/app/stor/actions/programActions";
import { ProgramInfo } from "src/app/interfaces/programs.details.type";
import { AppStateType } from "src/app/interfaces/app.state.type";
import ProgramBanner from "src/app/shared/ProgramBanner/ProgramBanner";
import { ProgramHeader } from "src/app/shared";
import { P, FlexRow, HeaderSmall } from "src/theme/CommonStyles";
import ProgramSeries from "./components/ProgramSeries/ProgramSeries";

/*
 *  Program Details
 *
 *  Information about the selected program
 *  Component used in this moduels are
 *    -
 *
 */

/*
 *  Router Interface
 */
interface MatchParams {
  id: string;
}
interface MatchProps extends RouteComponentProps<MatchParams> {}

function ProgramDetails({ match }: MatchProps): JSX.Element {
  const dispatch = useDispatch();

  // program info selector from App state
  const programInfo: ProgramInfo = useSelector((state: AppStateType) => {
    return state.programInfo;
  });

  // React hook to fetch program info data
  useEffect(() => {
    dispatch(loadProgramDetailsActions(match.params.id));
  }, [match, dispatch]);

  const { images, title, start, end } = programInfo || {};
  return (
    <>
      {programInfo && (
        <div>
          {/* 
            For large banner with image and duration
          */}
          <ProgramBanner
            image={images?.icon}
            title={title}
            start={start}
            end={end}
          ></ProgramBanner>

          <div style={{ padding: "10px 25px" }}>
            {/* 
            For  
              - Channel name, time, day and month
              - Programe title
              - Year and genre

          */}
            <ProgramHeader {...programInfo}></ProgramHeader>

            {/* 
            For program description
          */}
            <P>{programInfo.description}</P>

            {/* 
            For cast
          */}
            <FlexRow>
              <HeaderSmall>{"Cast: "}</HeaderSmall>
              {programInfo?.meta?.cast?.map((item, index) => (
                <HeaderSmall key={`cast_${index}`}>{item.name}</HeaderSmall>
              ))}
            </FlexRow>

            {/* 
            For creators
          */}
            <FlexRow>
              <HeaderSmall>{"Creators: "}</HeaderSmall>
              {programInfo?.meta?.cast?.map((item, index) => (
                <HeaderSmall key={`cast_${index}`}>{item.name}</HeaderSmall>
              ))}
            </FlexRow>

            {/* 
            For tabs
          */}
            <ProgramSeries series={programInfo.series} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProgramDetails;
