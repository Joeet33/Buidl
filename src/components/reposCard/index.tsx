import { StyledCard } from "../reposGitHubHorizontalScroll/index.styles";

export const ReposCard = ({
  title,
  repo_url,
}: {
  title: string;
  repo_url: string;
}) => {
  return (
    <StyledCard role="button" tabIndex={0} className="card">
      <div>
        <a href={repo_url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </div>
    </StyledCard>
  );
};
