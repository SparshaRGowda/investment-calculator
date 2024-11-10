import { useState } from "react";
import Header from "./Components/Header";
import UserInput from "./Components/UserInput";
import Results from "./Components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 200,
    duration: 10,
  });

  function handleChange(getString, value) {
    setUserInput((prevState) => ({
      ...prevState,
      [getString]: Number(value),
    }));
  }

  return (
    <div className="flex flex-col justify-center items-center top-10 absolute w-full">
      <Header />
      <UserInput userInput={userInput} inputChange={handleChange} />
      {userInput.duration > 0 ? (
        <Results userInput={userInput} />
      ) : (
        <p>Please enter duration greater than 0.</p>
      )}
    </div>
  );
}

export default App;
