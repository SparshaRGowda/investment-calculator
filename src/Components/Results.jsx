/* eslint-disable react/prop-types */
import {
  calculateInvestmentResults,
  formatter,
} from "../utils/investmentResults";

export default function Results({ userInput }) {
  const results = calculateInvestmentResults(userInput);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  return (
    <table className=" bg-red-200 table-fixed border-spacing-5 text-right">
      <thead className="">
        <tr>
          <th>Year</th>
          <th>Ivestment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, index) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalAmountVested = item.valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountVested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
