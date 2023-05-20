import { useFormik } from "formik";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import * as Yup from 'yup'

const ITCalculatorNew = () => {
    const [totalTax, setTotalTax] = useState(0)

    const formik = useFormik({
        initialValues: {
            grossIncome: "",
            incomeExempttions: "",
            otherIncome: "",
            deduction80C: "",
            deduction80D: "",
            deduction80E: "",
        },
        validationSchema: Yup.object({
            age: Yup.string(),
            grossIncome: Yup.string().required("Required"),
            incomeExempttions: Yup.string(),
            otherIncome: Yup.string(),
            deduction80C: Yup.string(),
            deduction80D: Yup.string(),
            deduction80E: Yup.string(),
        }),
        onSubmit: (values) => {
            let totalTax = 0



            const taxableSalary = parseInt(values.grossIncome || "0") - parseInt(values.incomeExempttions || "0")

            const totalIncome = taxableSalary + parseInt(values.otherIncome || "0")

            console.log(totalIncome);

            const totalDeductions = parseInt(values.deduction80C || "0") + parseInt(values.deduction80D || "0") + parseInt(values.deduction80E || "0")

            const totalTaxableIncome = totalIncome - totalDeductions

            if (totalTaxableIncome <= 300000) {
                totalTax = 0
            } else if (totalTaxableIncome > 300000 && totalTaxableIncome <= 600000) {
                totalTax = (totalTaxableIncome - 300000) / 100 * 5

            } else if (totalTaxableIncome > 600000 && totalTaxableIncome <= 900000) {
                const tax1 = 300000 / 100 * 5
                totalTax = tax1 + (totalTaxableIncome - 600000) / 100 * 10

            } else if (totalTaxableIncome > 900000 && totalTaxableIncome <= 1200000) {
                const tax1 = 300000 / 100 * 5
                const tax2 = 300000 / 100 * 10
                totalTax = tax1 + tax2 + (totalTaxableIncome - 900000) / 100 * 15
            } else if (totalTaxableIncome > 1200000 && totalTaxableIncome <= 1500000) {
                const tax1 = 300000 / 100 * 5
                const tax2 = 300000 / 100 * 10
                const tax3 = 300000 / 100 * 15
                totalTax = tax1 + tax2 + tax3 + (totalTaxableIncome - 1200000) / 100 * 20
            }
            else if (totalTaxableIncome > 1500000) {
                const tax1 = 300000 / 100 * 5
                const tax2 = 300000 / 100 * 10
                const tax3 = 300000 / 100 * 15
                const tax4 = 300000 / 100 * 20
                totalTax = tax1 + tax2 + tax3 + tax4 + (totalTaxableIncome - 1500000) / 100 * 30
            }



            setTotalTax(totalTax + (totalTax / 100 * 4))


        }

    })



    return (
        <div className="text-center w-full flex justify-center">
            <div className="max-w-4xl w-full text-start space-y-4">
                <div>

                    <h2 className="text-center text-2xl font-semibold">
                        Income Tax Calculator
                    </h2>
                    <p className="text-center text-rose-500"> (New Regime)</p>
                </div>
                <div className="grid grid-cols-2 gap-2">


                    <div className="flex flex-col justify-start gap-1">
                        <label htmlFor="grossIncome" className="text-gray-500 min-h-[2rem] sm:min-h-[1rem]">
                            Gross Salary    <BsInfoCircle className="inline cursor-help text-red-700" title="Your anual gross salary including Basic, HRA, Transposrt allowence, Special Allowence" />
                            {formik.errors.grossIncome && <span className="text-red-500"> Required</span>}
                        </label>
                        <input
                            type="number"
                            id="grossIncome"
                            name="grossIncome"
                            className={`border rounded-md p-1 ${formik.errors.grossIncome && "border-red-500"}`}
                            value={formik.values.grossIncome}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="flex flex-col justify-start gap-1">
                        <label htmlFor="incomeExempttions" className="text-gray-500 min-h-[2rem] sm:min-h-[1rem]">
                            Exemption from Salary    <BsInfoCircle className="inline cursor-help text-red-700" title="House rent and other utility bills are exempted for tax for salaried person- Bills to be provided" />
                        </label>
                        <input
                            type="number"
                            id="incomeExempttions"
                            name="incomeExempttions"
                            className="border rounded-md p-1"
                            value={formik.values.incomeExempttions}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="flex flex-col justify-start gap-1">
                        <label htmlFor="otherIncome" className="text-gray-500 min-h-[2rem] sm:min-h-[1rem]">
                            Income from other resources   <BsInfoCircle className="inline cursor-help text-red-700" title="Rental income, capital gains, Business profit, " />
                        </label>
                        <input
                            type="number"
                            id="otherIncome"
                            name="otherIncome"
                            className="border rounded-md p-1"
                            value={formik.values.otherIncome}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                        <label htmlFor="deduction80C">Deduction (Section 80C)  <BsInfoCircle className="inline cursor-help text-red-700" title="Like anual PPF deposit, ELSS investment, EPF deducted by employer- Max-1.5Lakhs" />
                        </label>
                        <input
                            type="number"
                            id="deduction80C"
                            name="deduction80C"
                            className="border rounded-md p-1"
                            value={formik.values.deduction80C}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                        <label htmlFor="deduction80D">Deduction (Section 80D) <BsInfoCircle className="text-rose-700 inline cursor-help" title="Medical insurance and other health expenses. Max 25000Rs(personal) and 50000Rs(parents)" /> </label>
                        <input
                            type="number"
                            id="deduction80D"
                            name="deduction80D"
                            className="border rounded-md p-1"
                            value={formik.values.deduction80D}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="flex flex-col justify-start gap-1">
                        <label htmlFor="deduction80E">Deduction (Section 80TTA) <BsInfoCircle className="text-rose-700 inline cursor-help" title="Saving Account interest upto 10000Rs exempted from tax" /> </label>
                        <input
                            type="number"
                            id="deduction80E"
                            name="deduction80E"
                            className="border rounded-md p-1"
                            value={formik.values.deduction80E}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="p-2 px-8   rounded-sm bg-rose-600 text-white w-full"
                    onClick={() => formik.handleSubmit()}
                >
                    Calculate Tax
                </button>

                <div>
                    <h3 className="text-xl font-bold">Total Tax (including cess) : {totalTax}</h3>
                </div>
            </div>
        </div>
    );
};

export default ITCalculatorNew;
