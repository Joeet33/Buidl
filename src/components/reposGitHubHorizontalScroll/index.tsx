import axios from "axios";
import { useEffect, useState } from "react";
import { IGitHubRepo } from "../../interfaces/IGitHubRepo";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "../reposArrows";
import { ReposCard } from "../reposCard";
import usePreventBodyScroll from "../reposBodyScroll";
import "./hideScrollbar.css";
import { onWheel } from "../reposOnWheel";

export const RepositoriesList = (props: { repositoriesUrl: string }) => {
  const { repositoriesUrl } = props;
  const [repositoriesList, setRepositoriesList] = useState<IGitHubRepo[]>([]);
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  useEffect(() => {
    (async () => {
      const result = await axios.get<IGitHubRepo[]>(repositoriesUrl);
      setRepositoriesList(result.data);
    })();
  }, [repositoriesUrl]);

  return (
    <div>
      {!repositoriesList.length && <p>No repositories found.</p>}
      {!!repositoriesList.length && (
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu
            LeftArrow={LeftArrow}
            RightArrow={RightArrow}
            onWheel={onWheel}
          >
            {repositoriesList.map((repository) => (
              <ReposCard
                title={repository.name}
                repo_url={repository.html_url} // NOTE: itemId is required for track items
                key={repository.id}
              />
            ))}
          </ScrollMenu>
        </div>
      )}
    </div>
  );
};
