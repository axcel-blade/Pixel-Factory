import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Navbar />
      <HomePage />
    </div>
  );
}