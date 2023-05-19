import { useState } from 'react'

const ITCalculator = () => {
    const [income, setIncome] = useState();
    const [houseRent, setHouseRent] = useState();
    const [lic, setLIC] = useState();
    const [elss, setELSS] = useState();
    const [tax, setTax] = useState();

    const calculateTax = () => {
        const taxableIncome = income - (houseRent + lic + elss);

        // Perform your tax calculation logic here based on taxableIncome

        // Update the tax state
        setTax(taxableIncome);
    };
    return (
        <div>
            <h2>Income Tax Calculator</h2>

            <div>
                <label htmlFor="income">Income: </label>
                <input
                    type="number"
                    id="income"
                    value={income}
                    onChange={(e) => { setIncome(Number(e.target.value)) }}
                />
            </div>

            <div>
                <label htmlFor="houseRent">House Rent Deduction: </label>
                <input
                    type="number"
                    id="houseRent"
                    value={houseRent}
                    onChange={(e) => setHouseRent(Number(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor="lic">LIC Deduction: </label>
                <input
                    type="number"
                    id="lic"
                    value={lic}
                    onChange={(e) => setLIC(Number(e.target.value))}
                />
            </div>

            <div>
                <label htmlFor="elss">ELSS Deduction: </label>
                <input
                    type="number"
                    id="elss"
                    value={elss}
                    onChange={(e) => setELSS(Number(e.target.value))}
                />
            </div>

            <button onClick={calculateTax}>Calculate Tax</button>

            <div>
                <h3>Tax: {tax}</h3>
            </div>
        </div>
    )
}

export default ITCalculator