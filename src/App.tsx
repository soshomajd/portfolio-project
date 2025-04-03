import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <header />
      <main className="flex-grow container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
