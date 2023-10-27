import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";
import { NotFound } from "./pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favourites" element={<Favourites />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
