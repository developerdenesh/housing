'use client'

import { useState } from "react";
import styles from "../page.module.css";
import Input from "./input";

export default function Main() {
    const [inputValues, setInputValues] = useState({
        price: 0,
        interest: 0,
        years: 0
    })

    const [monthly, setMonthly] = useState(0)

    const onClick = () => {
        // Interest rate is charged per month
        const interestPercentage = inputValues.interest / 100
        const i = interestPercentage / 12

        // Number of months it takes to pay off this loan
        const n = inputValues.years * 12

        // The amortisation formula
        const a = Math.pow((1 + i), n)
        const result = (i * a) / (a - 1)

        // Loan amount
        const monthlyLoan = inputValues.price * result
        setMonthly(monthlyLoan.toFixed(2))
    }

    const onSubmit = (evt) => {
        setInputValues({
            price: (evt.name === "price") ? (evt.value) : inputValues.price,
            interest: (evt.name === "interest") ? (evt.value) : inputValues.interest,
            years: (evt.name === "years") ? (evt.value) : inputValues.years,
        })
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                Please type in all information
                <form>
                    <Input
                        type="text"
                        name="price"
                        placeholder="Price of the unit ($)"
                        onSubmit={onSubmit}
                    />
                    <Input
                        type="text"
                        name="interest"
                        placeholder="Interest (%)"
                        onSubmit={onSubmit}
                    />
                    <Input
                        type="text"
                        name="years"
                        placeholder="Years"
                        onSubmit={onSubmit}
                    />
                </form>

                <div className={styles.ctas}>
                    <a
                        className={styles.primary}
                        onClick={onClick}
                    >
                        Compute
                    </a>
                </div>
                The montly payment is: {monthly}
            </main>
        </div>
    )
}