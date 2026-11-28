import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
