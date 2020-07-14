import React from "react";
import styled from "styled-components";
import { Series, Episodes } from "src/app/interfaces/programs.details.type";
import Tabs from "src/app/shared/Tabs/Tabs";
import Theme from "src/theme/theme";

/*
 *  ProgramSeries Component
 *  Wrapper component for program series
 *  The component will accept program series and return a tab with series title and content.
 */
const ProgramSeries = ({ series }: { series: Series[] }): JSX.Element => {
  const getTabeTitles = (series: Series[]): string[] => {
    return series?.map((item) => item.title);
  };

  /*
   * Create Array of jsx element from input data
   */
  const getTabeContent = (series: Series[]): JSX.Element[] => {
    return series?.map((item, index) => {
      return (
        <div key={`series_${index}`}>
          <h2>Episodes</h2>
          {item.episodes.map((episode: Episodes, index) => (
            <EpisodeContent key={`episodes_${index}`}>
              {episode.title}
            </EpisodeContent>
          ))}
        </div>
      );
    });
  };

  return (
    <ProgramSeriesContainer>
      {/* Tab component with title and content as jsx ele array */}
      <Tabs
        tabHeads={getTabeTitles(series)}
        tabcontents={getTabeContent(series)}
      ></Tabs>
    </ProgramSeriesContainer>
  );
};

/*
 * Styled components
 */
const ProgramSeriesContainer = styled.div`
  padding: 25px 15px;
`;

const EpisodeTitle = styled.div`
  font-color: ${Theme.colors.white};
`;

const EpisodeContent = styled.div`
  color: ${Theme.colors.white};
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid ${Theme.colors.gray};
`;
export default ProgramSeries;
