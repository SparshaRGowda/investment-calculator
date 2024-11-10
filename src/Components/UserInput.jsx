/* eslint-disable react/prop-types */

export default function UserInput({ userInput, inputChange }) {
  return (
    <div className="m-8 border-4 p-5 bg-sky-300">
      <div className="flex justify-evenly ml-5 m-2">
        <label>Initial Investment</label>
        <input
          type="number"
          required
          value={userInput.initialInvestment}
          onChange={(e) => inputChange("initialInvestment", e.target.value)}
          className="bg-slate-200"
        />

        <label className="ml-10">Annual Investment</label>
        <input
          type="number"
          required
          value={userInput.annualInvestment}
          onChange={(e) => inputChange("annualInvestment", e.target.value)}
          className="bg-slate-200"
        />
      </div>
      <div className="flex justify-evenly">
        <label>Expected Return</label>
        <input
          type="number"
          required
          value={userInput.expectedReturn}
          onChange={(e) => inputChange("expectedReturn", e.target.value)}
          className="bg-slate-200"
        />

        <label>Duration</label>
        <input
          type="number"
          required
          value={userInput.duration}
          onChange={(e) => inputChange("duration", e.target.value)}
          className="bg-slate-200"
        />
      </div>
    </div>
  );
}
