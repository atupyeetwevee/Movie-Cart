import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AppLayout from "./layout/AppLayout"
import MoviesPage from "./pages/MoviesPage"
import SeriesPage from "./pages/SeriesPage"
import BookmarkPage from "./pages/BookmarkPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route path="/" element={<HomePage />}/>
            <Route path="/movies" element={<MoviesPage />}/>
            <Route path="/series" element={<SeriesPage />}/>
            <Route path="/bookmark" element={<BookmarkPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App