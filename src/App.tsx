import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import AuthenticationLayout from "./ui/AuthenticationLayout";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import AllGames from "./pages/AllGames";
import Game from "./pages/Game";
import GameCategory from "./pages/GameCategory";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

import { categories, newReleases } from "./utils/variables";
import { MenuMobile } from "./context/MenuContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import ScrollToTop from "./ui/ScrollToTop";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0,
      staleTime: 3 * 1000 * 60, // 3 mins
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <MenuMobile>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />

              {/* new releases */}
              <Route path="discover" element={<Navigate to="/" />} />
              {newReleases.map((slug, key) => (
                <Route
                  key={key}
                  path={`discover/${slug.to}`}
                  element={<Discover slug={slug.to} />}
                />
              ))}

              {/* games */}
              <Route path="games" element={<AllGames />} />
              <Route path="games/:category" element={<GameCategory />} />
              <Route path="game/:name" element={<Game />} />
              <Route path="games/browse" element={<Categories />} />

              {/* categories */}
              {categories.map((category, key) => (
                <Route
                  key={key}
                  path={category.category}
                  element={<Category name={category.category} />}
                />
              ))}
            </Route>
            <Route element={<AuthenticationLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MenuMobile>
      <Toaster toastOptions={{ duration: 3000 }} />
    </QueryClientProvider>
  );
}

export default App;
