import { Banner } from "../components/Banner";
import { SearchForm } from "../components/SearchForm";
import { Repos } from "../components/Repos";
import { AlertBanner } from "../components/AlertBanner";

export const Home = () => {
  return (
    <div>
      <Banner />
      <SearchForm />
      <Repos />
      <AlertBanner />
    </div>
  );
};
