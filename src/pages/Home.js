import { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";
import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { Repos } from "../components/Repos";
import { AlertBanner } from "../components/AlertBanner";
import axios from "axios";

export const Home = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url) {
      const fetchData = async () => {
        try {
          setIsLoading(true);
          setData();

          const response = await axios.get(url);

          if (response.status !== 200) {
            setError(true);
          } else {
            setError(false);
            setIsLoading(false);
            setData(response.data);
          }
        } catch (error) {
          setError(true);
          setIsLoading(false);
          setData();
        }
      };

      fetchData();
    }
  }, [url]);

  const onSuccess = (username) => {
    setUrl(`https://api.github.com/users/${username}/repos`);
  };

  return (
    <Stack gap={3}>
      <Banner
        title="Welcome to GitHub Logger"
        subTitle="Track your favourite GitHub repositories at thße palm of your hand!"
      />
      <SearchForm onSuccess={onSuccess} />
      {isLoading && (
        <Stack direction="horizontal" className="justify-content-center">
          <Spinner animation="border" />
        </Stack>
      )}
      {data && <Repos repos={data} />}
      {error && (
        <AlertBanner
          message="Something went wrong. Please try again!"
          variant="danger"
        />
      )}
    </Stack>
  );
};
