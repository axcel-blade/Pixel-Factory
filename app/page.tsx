import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";;

export default function Home() {
  return (
    <div className="dark:bg-black">
      <NavBar/>
      <HomePage/>
    </div>
  );
}