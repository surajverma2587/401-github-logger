import Stack from "react-bootstrap/Stack";
import { Banner } from "../components/Banner";
import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../utils/getFromLocalStorage";
import { Repos } from "../components/Repos";

export const Favourites = () => {
  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      const itemsFromLS = getFromLocalStorage("favourites", []);

      setData(itemsFromLS);
    }
  }, []);

  return (
    <Stack gap={3}>
      <Banner
        title="Welcome to GitHub Logger"
        subTitle="Track your favourite GitHub repositories at the palm of your hand!"
      />
      {data && <Repos repos={data} />}
    </Stack>
  );
};
