import Stack from "react-bootstrap/Stack";
import { RepoCard } from "./RepoCard";
import { AlertBanner } from "./AlertBanner";

export const Repos = ({ repos }) => {
  return (
    <Stack gap={3} className="card m-2 p-4">
      <h3 className="text-center">Search Results</h3>

      {repos.length === 0 && (
        <AlertBanner
          message="No repositories available!"
          variant="info"
          showImage={false}
        />
      )}
      {repos.length > 0 && (
        <Stack
          gap={2}
          direction="horizontal"
          className="flex-wrap justify-content-evenly"
        >
          {repos.map((repo) => {
            return <RepoCard key={repo.id} repo={repo} />;
          })}
        </Stack>
      )}
    </Stack>
  );
};
