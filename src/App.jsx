import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import BookmarkPage from "./pages/BookmarkPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Main pages for Movie-cart */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/series" element={<SeriesPage />} />
            <Route path="/bookmark" element={<BookmarkPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/series/:id" element={<MovieDetailsPage />} />
          </Route>

          {/* Authentication layout */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/login" element={<LogInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
