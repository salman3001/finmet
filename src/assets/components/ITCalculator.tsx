import { useState } from "react";

const ITCalculator = () => {
  const [income, setIncome] = useState(0);
  const [houseRent, setHouseRent] = useState(0);
  const [lic, setLIC] = useState(0);
  const [elss, setELSS] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    const taxableIncome = income - (houseRent + lic + elss);

    // Perform your tax calculation logic here based on taxableIncome

    // Update the tax state
    if (Number.isNaN(taxableIncome)) {
      setTax(0);
    } else if (taxableIncome < 0) {
      setTax(0);
    } else {
      setTax(taxableIncome);
    }
  };
  return (
    <div className="text-center w-full flex justify-center">
      <div className="max-w-xs w-full text-start space-y-4">
        <h2 className="text-center text-2xl font-semibold">
          Income Tax Calculator
        </h2>

        <div className="flex flex-col justify-start gap-1">
          <label htmlFor="income" className="text-gray-500">
            Income{" "}
          </label>
          <input
            type="number"
            id="income"
            className="border rounded-md p-1"
            value={income}
            onChange={(e) => {
              setIncome(parseInt(e.target.value));
            }}
          />
        </div>

        <div className="flex flex-col justify-start gap-1">
          <label htmlFor="houseRent">House Rent Deduction: </label>
          <input
            type="number"
            id="houseRent"
            className="border rounded-md p-1"
            value={houseRent}
            onChange={(e) => setHouseRent(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col justify-start gap-1">
          <label htmlFor="lic">LIC Deduction: </label>
          <input
            type="number"
            id="lic"
            className="border rounded-md p-1"
            value={lic}
            onChange={(e) => setLIC(parseInt(e.target.value))}
          />
        </div>

        <div className="flex flex-col justify-start gap-1">
          <label htmlFor="elss">ELSS Deduction: </label>
          <input
            type="number"
            id="elss"
            className="border rounded-md p-1"
            value={elss}
            onChange={(e) => setELSS(parseInt(e.target.value))}
          />
        </div>

        <button
          className="p-2 px-8   rounded-sm bg-rose-600 text-white w-full"
          onClick={calculateTax}
        >
          Calculate Tax
        </button>

        <div>
          <h3 className="text-xl font-bold">Total Tax : {tax}</h3>
        </div>
      </div>
    </div>
  );
};

export default ITCalculator;
