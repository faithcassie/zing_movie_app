import React from "react";
import "./App.css";
import { useLocation, Route, Routes } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeProvider";
import RootLayout from "./layouts/RootLayout";
import MoviePage from "./pages/MoviePage";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";
import AuthContext from "./contexts/AuthContext";
import MovieDetails from "./components/MovieDetails";
import TvshowPage from "./pages/TvshowPage";
import ErrorPage from "./pages/ErrorPage";
import MovieModal from "./components/MovieModal";
import TvModal from "./components/TvModal";
import SearchPage from "./pages/SearchPage";

function App() {
  const location = useLocation();
  const state = location.state;

  return (
    <AuthContext>
      <ThemeProvider>
        {/* <RouterProvider router={router} /> */}
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="trending" element={<TrendingPage />} />
            <Route path="movie" element={<MoviePage />}>
              <Route path="movie/:id" element={<MovieDetails />} />
            </Route>
            <Route path="tvshow" element={<TvshowPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="movie/:id" element={<MovieModal />} />
            <Route path="tv/:id" element={<TvModal />} />
          </Routes>
        )}
      </ThemeProvider>
    </AuthContext>
  );
}

export default App;
