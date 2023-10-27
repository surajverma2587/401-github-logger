import Stack from "react-bootstrap/Stack";
import { RepoCard } from "./RepoCard";

export const Repos = () => {
  return (
    <Stack gap={3} className="card m-2 p-4">
      <h3 className="text-center">Search Results</h3>
      <Stack
        gap={2}
        direction="horizontal"
        className="flex-wrap justify-content-evenly"
      >
        <RepoCard />
        <RepoCard />
        <RepoCard />
        <RepoCard />
      </Stack>
    </Stack>
  );
};
