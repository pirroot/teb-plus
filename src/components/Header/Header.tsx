import MainNav from './MainNav';
import Nav from './Nav';

export default function Header() {
  return (
    <>
      <header className="border-b border-gray-200 shadow-sm shadow-gray-200 bg-white">
        <MainNav />
      </header>
      <Nav /></>
  );
}