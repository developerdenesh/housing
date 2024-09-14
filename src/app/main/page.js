'use client'

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Input, { formatValue } from "./input";
import { Divider, Text } from "@mantine/core";
import RecipeReviewCard from "./components/demo";
import MassiveForm from "./massiveform";

const Main = () => {
    const [monthly, setMonthly] = useState(0)
    const [initialValue, setInitialValue] = useState(0)
    const [inputValues, setInputValues] = useState({
        price: 0,
        interest: 0,
        years: 0
    })

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

    useEffect(() => {
        compute()
    }, [inputValues])

    const onClick = ()  => compute()
    const calculateInitialValue = () => setInitialValue(0.75 * inputValues.price)

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
                    <MassiveForm 
                        calculateInitialValue={calculateInitialValue}
                        initialValue={initialValue}
                        onSubmit={onSubmit}
                    />
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
                        The montly payment is: ${monthly}
                    </Text>
                    <Text>
                        The downpayment is: ${formatValue((inputValues.price - inputValues.loan).toString())}
                    </Text>
                    <Text>
                        The downpayment is: ${formatValue((inputValues.price - inputValues.loan).toString())}
                    </Text>
                </main>
            </div>
            <RecipeReviewCard year="2024"/>
            <RecipeReviewCard year="2025"/>
            <RecipeReviewCard year="2026"/>
            <RecipeReviewCard year="2027"/>
            <RecipeReviewCard year="2028"/>
            <RecipeReviewCard year="2029"/>
            <RecipeReviewCard year="2030"/>
            <RecipeReviewCard year="2031"/>
            <RecipeReviewCard year="2032"/>
            <RecipeReviewCard year="2033"/>
            <RecipeReviewCard year="2034"/>
            <RecipeReviewCard year="2035"/>
            <RecipeReviewCard year="2036"/>
            <RecipeReviewCard year="2037"/>
            <RecipeReviewCard year="2038"/>
            <RecipeReviewCard year="2039"/>
            <RecipeReviewCard year="2040"/>
            <RecipeReviewCard year="2041"/>
            <RecipeReviewCard year="2042"/>
            <RecipeReviewCard year="2043"/>
            <RecipeReviewCard year="2044"/>
            <RecipeReviewCard year="2045"/>
            <RecipeReviewCard year="2046"/>
            <RecipeReviewCard year="2047"/>
            <RecipeReviewCard year="2048"/>
            <RecipeReviewCard year="2049"/>
            <RecipeReviewCard year="2050"/>
            <RecipeReviewCard year="2051"/>
            <RecipeReviewCard year="2052"/>
            <RecipeReviewCard year="2053"/>
            <RecipeReviewCard year="2054"/>
        </>
    )
}

export default Main