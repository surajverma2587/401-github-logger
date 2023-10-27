import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { Repos } from "../components/Repos";
import { AlertBanner } from "../components/AlertBanner";

export const Home = () => {
  return (
    <div>
      <Banner
        title="Welcome to GitHub Logger"
        subTitle="Track your favourite GitHub repositories at the palm of your hand!"
      />
      <SearchForm />
      <Repos />
      <AlertBanner />
    </div>
  );
};
