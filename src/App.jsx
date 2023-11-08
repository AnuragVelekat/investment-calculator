import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { useState } from "react";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prev) => {
      return { ...prev, [inputIdentifier]: +newValue };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleChange} />
      {inputIsValid && <Results userInput={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
