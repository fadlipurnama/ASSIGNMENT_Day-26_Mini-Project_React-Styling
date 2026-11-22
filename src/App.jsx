import { Route, Routes } from "react-router-dom";
import Header from "./components/organisms/Header";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/organisms/Footer";

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
      <Footer />
    </>
  );
}

export default App;
