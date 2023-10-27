import Stack from "react-bootstrap/Stack";
import { Banner } from "../components/Banner";
import { AlertBanner } from "../components/AlertBanner";

export const NotFound = () => {
  return (
    <Stack gap={3}>
      <Banner
        title="Welcome to GitHub Logger"
        subTitle="Track your favourite GitHub repositories at the palm of your hand!"
      />
      <AlertBanner
        message="Looks like you are lost. Please go home!"
        variant="warning"
      />
    </Stack>
  );
};
