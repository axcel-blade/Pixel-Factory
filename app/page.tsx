import Navbar from "./components/NavBar";
import HomePage from "./pages/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <h1 className="sr-only">
        Pixel Factory — 3D visualization, web design, and video production in
        Sri Lanka
      </h1>
      <Navbar />
      <HomePage />
    </div>
  );
}
