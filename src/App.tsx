import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import DiscoverLayout from "./ui/DiscoverLayout";
import CategoryLayout from "./ui/CategoryLayout";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AllGames from "./pages/AllGames";
import GameCategory from "./pages/GameCategory";
import Game from "./pages/Game";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

import { categories, newReleases } from "./utils/variables";
import { MenuMobile } from "./context/MenuContext";

function App() {
  return (
    <MenuMobile>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />

            {/* new releases */}
            <Route element={<DiscoverLayout />}>
              <Route path="discover" element={<Navigate to="/" />} />
              {newReleases.map((slug, key) => (
                <Route
                  key={key}
                  path={`discover/${slug.to}`}
                  element={<Discover slug={slug.to} />}
                />
              ))}
            </Route>

            {/* games */}
            <Route path="games" element={<AllGames />} />
            <Route path="games/:category" element={<GameCategory />} />
            <Route path="games/:name" element={<Game />} />
            <Route path="games/browse" element={<Categories />} />

            {/* categories */}
            <Route element={<CategoryLayout />}>
              {categories.map((category, key) => (
                <Route
                  key={key}
                  path={category.category} // path="platforms"
                  element={<Category name={category.category} />}
                />
              ))}
            </Route>

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </MenuMobile>
  );
}

export default App;
