import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
