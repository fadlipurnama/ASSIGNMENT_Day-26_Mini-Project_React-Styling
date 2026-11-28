import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import CoursesPage from "./pages/CoursesPage";
import MainLayout from "./layouts/MainLayout";
import CourseDetailPage from "./pages/CourseDetailPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:slug" element={<CourseDetailPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
