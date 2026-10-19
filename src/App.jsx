import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./layout/AppLayout"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import BookmarkPage from "./pages/BookmarkPage"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import MovieDetailsPage from "./pages/MovieDetailsPage"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/login" element={<LogInPage />}/>
            <Route path="/" element={<HomePage />}/>
            <Route path="/movies" element={<MoviesPage />}/>
            <Route path="/series" element={<SeriesPage />}/>
            <Route path="/bookmark" element={<BookmarkPage />}/>
            <Route path="/movie/:id" element={<MovieDetailsPage />}/>
            <Route path="/series/:id" element={<MovieDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App