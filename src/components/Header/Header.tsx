import MainNav from './MainNav';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="shadow border-b-2 border-gray-200 shadow-gray-200 bg-white">
      <MainNav />
      <Nav />
    </header>
  );
}
