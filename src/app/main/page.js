'use client'

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { Divider, Text } from "@mantine/core";
import { Card, CardContent, Fab, FormControl, InputLabel, MenuItem, Select, Slider, Typography } from "@mui/material";
import { formatValue } from "./input";
import MassiveForm from "./massiveform";
import SectionTwoInput from "./sectiontwoinput";
import LifeSavings from "./lifesavings";
import { Add } from "@mui/icons-material";

const Main = () => {
    const [monthly, setMonthly] = useState(0)
    const [cash, setCash] = useState(0)
    const [cpf, setCPF] = useState(0)
    const [shortFallPayback, setShortFallPayback] = useState(0)
    const [initialValue, setInitialValue] = useState("")
    const [expenditure, setExpenditure] = useState([])
    const [name, setName] = useState("")
    const [bill, setBill] = useState("")
    const [year, setYear] = useState("")
    const [type, setType] = useState("")
    const [age, setAge] = useState('')
    const [timeframe, setTimeframe] = useState("")
    const [timeframeVisible, setTimeframeVisible] = useState(false)
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

        setMonthly(parseFloat(monthlyLoan.toFixed(2)))
    }

    const addExpenditure = () => setExpenditure([...expenditure, {
        name: name,
        bill: (type) ? parseFloat(bill) : parseFloat(bill)/12,
        timeframe, timeframe,
        type: type,
        year: year,
    }])

    const computeExpenditure = () => {
        setExpenditure([{
            name: "Bank loan for condo",
            bill: monthly,
            timeframe: inputValues.years,
            year: 2024,
        }, {
            name: "Shortfall loan",
            bill: (inputValues.price - inputValues.loan - cash - cpf) / (shortFallPayback * 12),
            timeframe: shortFallPayback,
            year: 2024,
        }])
    }

    const onChangeName = (e) => setName(e.target.value)
    const onChangeTimeframe = (e) => setTimeframe(e.target.value)
    const onChangeBill = (e) => setBill(e.target.value)
    const onChangeYear = (e) => setYear(e.target.value)
    const handleChange = (event) => setAge(event.target.value)

    useEffect(() => {
        setTimeframeVisible((age === 20) ? true : false)
        setType((age === 20) ? true : false)
    }, [age])

    useEffect(() => {
        compute()
    }, [inputValues])

    useEffect(() => {
        const payback = (inputValues.price - inputValues.loan - cash - cpf) / (shortFallPayback * 12)
    }, [shortFallPayback])


    const onSliderChange = (e) => setShortFallPayback(parseFloat(e.target.value.toFixed(2)))
    const onClick = () => computeExpenditure()
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
                    <u>Please type in all information</u>
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
                        valueLabelFormat={`Years to payback: ${shortFallPayback}`}
                        valueLabelDisplay="auto"
                        shiftStep={1}
                        step={1}
                        marks
                        min={1}
                        max={30}
                        onChange={onSliderChange}
                    />
                    <Text>
                        The monthly payment is:
                        ${monthly} + ${(inputValues.price - inputValues.loan - cash - cpf) / (shortFallPayback * 12)}
                        = ${monthly + (inputValues.price - inputValues.loan - cash - cpf) / (shortFallPayback * 12)}
                    </Text>
                    <div className={styles.ctas}>
                        <a
                            className={styles.primary}
                            onClick={onClick}
                        >
                            Compute
                        </a>
                    </div>
                    <Divider my="lg" style={{ border: "1px solid black" }} variant="dashed" />
                    <Card sx={{ maxWidth: 600 }}>
                        <CardContent>
                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                            >
                                name
                            </Typography>
                            <input onChange={onChangeName} />
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    label="Type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={10}>Single Expense</MenuItem>
                                    <MenuItem value={20}>Monthly Expense</MenuItem>
                                </Select>
                            </FormControl>
                            {timeframeVisible &&
                                <>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: 'text.secondary' }}
                                    >
                                        timeframe
                                    </Typography>
                                    <input onChange={onChangeTimeframe} />
                                </>
                            }
                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                            >
                                {age === 10 ? "Bill for the year" : "Monthly Bill"}
                            </Typography>
                            <input onChange={onChangeBill} />
                            <Typography
                                variant="body2"
                                sx={{ color: 'text.secondary' }}
                            >
                                Year bill starts
                            </Typography>
                            <input onChange={onChangeYear} />
                            <Fab color="primary" aria-label="add" onClick={addExpenditure}>
                                <Add />
                            </Fab>
                        </CardContent>
                    </Card>
                </main>
            </div>
            <LifeSavings expenditure={expenditure} />
        </>
    )
}

export default Main