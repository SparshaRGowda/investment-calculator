import logo from "../assets/react.svg";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <img src={logo} alt="React logo" className=" size-20" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
