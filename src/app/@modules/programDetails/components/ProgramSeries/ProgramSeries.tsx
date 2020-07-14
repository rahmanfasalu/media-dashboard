import React from "react";
import styled from "styled-components";
import { Series, Episodes } from "src/app/interfaces/programs.details.type";
import Tabs from "src/app/shared/Tabs/Tabs";
import Theme from "src/theme/theme";

/*
 *  ProgramSeries Component
 */
const ProgramSeries = ({ series }: { series: Series[] }): JSX.Element => {
  const getTabeTitles = (series: Series[]): string[] => {
    return series?.map((item) => item.title);
  };

  const getTabeContent = (series: Series[]) => {
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
      <Tabs
        tabHeads={getTabeTitles(series)}
        tabcontents={getTabeContent(series)}
      ></Tabs>
    </ProgramSeriesContainer>
  );
};

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
