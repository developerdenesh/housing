'use client'

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import Input, { formatValue } from "./input";
import { Divider, Text } from "@mantine/core";
import RecipeReviewCard from "./components/demo";
import MassiveForm from "./massiveform";
import SectionTwoInput from "./sectiontwoinput";
import { Slider } from "@mui/material";

const Main = () => {
    const [monthly, setMonthly] = useState(0)
    const [cash, setCash] = useState(0)
    const [cpf, setCPF] = useState(0)
    const [shortFallPayback, setShortFallPayback] = useState(0)
    const [initialValue, setInitialValue] = useState("")
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

        setMonthly(ParseFloat(monthlyLoan.toFixed(2)))
    }

    useEffect(() => {
        compute()
    }, [inputValues])

    useEffect(() => {
        console.log(`The shortfall payback is: ${shortFallPayback}`)
        const payback = (inputValues.price - inputValues.loan - cash - cpf)/(shortFallPayback * 12)
        console.log(`Monthly: ${monthly}, payback: ${payback}`)
        console.log(`Monthly: ${typeof(monthly)}, payback: ${typeof(payback)}`)
        console.log(monthly + payback)
    }, [shortFallPayback])


    const onSliderChange = (e) => setShortFallPayback(parseFloat(e.target.value.toFixed(2)))
    const onClick = () => compute()
    const calculateInitialValue = () => setInitialValue((0.75 * inputValues.price).toString())

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
                    <Divider my="lg" style={{ border: "1px solid black" }} variant="dashed" />
                    <Text>
                        The initial monthly payment is: ${monthly}
                    </Text>
                    <Text>
                        The downpayment is: ${formatValue((inputValues.price - inputValues.loan).toString())}
                    </Text>
                    <SectionTwoInput setCPF={setCPF} setCash={setCash} />
                    <Divider my="lg" style={{ border: "1px solid black" }} variant="dashed" />
                    <Text>
                        The shortfall is: ${formatValue((inputValues.price - inputValues.loan - cash - cpf).toString())}
                    </Text>
                    <Slider
                        aria-label="Temperature"
                        defaultValue={30}
                        valueLabelFormat="How many years would you like to pay back the short fall?"
                        valueLabelDisplay="auto"
                        shiftStep={1}
                        step={1}
                        marks
                        min={1}
                        max={30}
                        onChange={onSliderChange}
                    />
                    <Text>
                        The initial monthly payment is: 
                        ${monthly} + ${(inputValues.price - inputValues.loan - cash - cpf)/(shortFallPayback * 12)}
                        = ${parseFloat(monthly) + (inputValues.price - inputValues.loan - cash - cpf)/(shortFallPayback * 12)}
                    </Text>
                    <div className={styles.ctas}>
                        <a
                            className={styles.primary}
                            onClick={onClick}
                        >
                            Compute
                        </a>
                    </div>

                </main>
            </div>
            <RecipeReviewCard year="2024" />
            <RecipeReviewCard year="2025" />
            <RecipeReviewCard year="2026" />
            <RecipeReviewCard year="2027" />
            <RecipeReviewCard year="2028" />
            <RecipeReviewCard year="2029" />
            <RecipeReviewCard year="2030" />
            <RecipeReviewCard year="2031" />
            <RecipeReviewCard year="2032" />
            <RecipeReviewCard year="2033" />
            <RecipeReviewCard year="2034" />
            <RecipeReviewCard year="2035" />
            <RecipeReviewCard year="2036" />
            <RecipeReviewCard year="2037" />
            <RecipeReviewCard year="2038" />
            <RecipeReviewCard year="2039" />
            <RecipeReviewCard year="2040" />
            <RecipeReviewCard year="2041" />
            <RecipeReviewCard year="2042" />
            <RecipeReviewCard year="2043" />
            <RecipeReviewCard year="2044" />
            <RecipeReviewCard year="2045" />
            <RecipeReviewCard year="2046" />
            <RecipeReviewCard year="2047" />
            <RecipeReviewCard year="2048" />
            <RecipeReviewCard year="2049" />
            <RecipeReviewCard year="2050" />
            <RecipeReviewCard year="2051" />
            <RecipeReviewCard year="2052" />
            <RecipeReviewCard year="2053" />
            <RecipeReviewCard year="2054" />
        </>
    )
}

export default Main