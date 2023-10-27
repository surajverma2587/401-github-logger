import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";

export const RepoCard = ({ repo }) => {
  const handleFavouriteClick = () => {
    const repoObj = {
      id: repo.id,
      name: repo.name,
      stargazers_count: repo.stargazers_count,
      description: repo.description,
      html_url: repo.html_url,
    };

    const itemsFromLS = getFromLocalStorage("favourites", []);

    const newRepos = [repoObj, ...itemsFromLS];

    localStorage.setItem("favourites", JSON.stringify(newRepos));
  };

  return (
    <Card className="repo-card my-3">
      <Card.Body>
        <Card.Title className="fs-5">
          <Stack
            direction="horizontal"
            className="justify-content-between align-items-center"
          >
            <div>{repo.name}</div>
            <div className="text-muted fw-light fs-6">
              <i className="fa-solid fa-star me-2"></i>
              {repo.stargazers_count}
            </div>
          </Stack>
        </Card.Title>
        <Card.Text>{repo.description}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center fs-3">
        <Card.Link href={repo.html_url}>
          <i className="fa-brands fa-github" />
        </Card.Link>
        <Button variant="link" className="fs-3" onClick={handleFavouriteClick}>
          <i className="fa-regular fa-heart"></i>
        </Button>
      </Card.Footer>
    </Card>
  );
};
