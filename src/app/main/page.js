'use client'

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Input, { formatValue } from "./input";
import { Divider, Text } from "@mantine/core";

const Main = () => {
    const [inputValues, setInputValues] = useState({
        price: 0,
        interest: 0,
        years: 0
    })

    const [downpayment, setDownpayment] = useState(0)
    const [monthly, setMonthly] = useState(0)
    const [initalValue, setInitalValue] = useState(0)

    const calculateInitialValue = () => {
        console.error("hi")
        setInitalValue(0.75 * inputValues.price)
    }

    const compute = () => {
        // Interest rate is charged per month
        const interestPercentage = inputValues.interest / 100
        const i = interestPercentage / 12

        // Number of months it takes to pay off this loan
        const n = inputValues.years * 12

        // The amortisation formula
        const a = Math.pow((1 + i), n)
        const result = (i * a) / (a - 1)

        // Loan amount
        const monthlyLoan = inputValues.loan * result

        setMonthly(monthlyLoan.toFixed(2))
    }

    const onClick = () => {
        compute()
    }

    useEffect(() => {
        compute()
    }, [inputValues])

    const onSubmit = (evt) => {
        setInputValues({
            price: (evt.name === "price") ? (evt.value) : inputValues.price,
            loan: (evt.name === "loan") ? (evt.value) : inputValues.loan,
            interest: (evt.name === "interest") ? (evt.value) : inputValues.interest,
            years: (evt.name === "years") ? (evt.value) : inputValues.years,
        })
    }

    return (
        <>
            <div className={styles.page}>
                <main className={styles.main} style={{ width: "50vw" }}>
                    Please type in all information
                    <form style={{ width: "50" }}>
                        <label htmlFor="price" style={{ float: "left" }}>Price:&nbsp;</label>
                        <Input
                            id="price"
                            type="text"
                            name="price"
                            placeholder="Price of the unit ($)"
                            onSubmit={onSubmit}
                        />
                        <br />
                        <div>
                            <label htmlFor="loan" style={{ float: "left" }}>Loan:&nbsp;</label>
                            <Input
                                id="loan"
                                type="text"
                                name="loan"
                                initialValue={initalValue}
                                placeholder="Loan available"
                                onSubmit={onSubmit}
                            />
                            <button type="button" onClick={calculateInitialValue}>Use LTV</button>
                        </div>
                        <br />
                        <label htmlFor="interest" style={{ float: "left" }}>Interest:&nbsp;</label>
                        <Input
                            id="interest"
                            type="text"
                            name="interest"
                            placeholder="Interest (%)"
                            onSubmit={onSubmit}
                        />
                        <br />
                        <label htmlFor="years" style={{ float: "left" }}>Years:&nbsp;</label>
                        <Input
                            id="years"
                            type="text"
                            name="years"
                            placeholder="Years"
                            onSubmit={onSubmit}
                        />
                        <br />
                    </form>

                    <div className={styles.ctas}>
                        <a
                            className={styles.primary}
                            onClick={onClick}
                        >
                            Compute
                        </a>
                    </div>
                    <Divider my="lg" style={{ border: "1px solid black" }}  variant="dashed"/>
                    <Text>
                        The downpayment is: ${formatValue((inputValues.price - inputValues.loan).toString())}
                    </Text>
                    <Text>
                        The montly payment is: ${monthly}
                    </Text>
                </main>
            </div>
        </>
    )
}

export default Main