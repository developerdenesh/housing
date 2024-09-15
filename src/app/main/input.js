'use client'

import { useEffect, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';

export const formatValue = (value) => {
    // Reverse the string
    const valueReversed = value
        .split("")
        .reverse()
        .join("")

    // Convert the string to an array
    const chars = [...valueReversed]

    // Add the comma every 4 characters
    for (let i = 0; i < chars.length; i++)
        if ((i + 1) % 4 == 0) chars.splice(i, 0, ",")

    // Reverse the array back and join it to become a string
    return chars.reverse().join("")
}

export const addPercentage = (value) => (value.length > 0) ? ("$" + value) : (value)

const Input = (props) => {
    const { type, name, placeholder, onSubmit, initialValue } = props;

    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        if (name !== "loan" || initialValue === undefined)
            return

        setValue(initialValue.toString());
    }, [initialValue])

    const onChange = (e) => {
        // Remove all commas or pecentage signs
        setValue(
            e.target.value
                .replaceAll("$", "")
                .replaceAll(",", "")
        );
    }

    const onCancel = () => {
        setValue("")
        setInputValue("")
    }

    useEffect(() => {
        // Submit clean values only
        onSubmit({
            name: name,
            value: value,
        })

        // For visualisation add the price format
        if (name === "price" || name === "loan") {
            const formattedValue = formatValue(value)
            const formattedValueWithPercentage = addPercentage(formattedValue)
            setInputValue(formattedValueWithPercentage)
            return
        }

        setInputValue(value)

    }, [value])

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <input
                style={{ display: "block", textAlign: "center", height: "30px" }}
                size="50"
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                value={inputValue}
            />
            <CancelIcon style={{ cursor: "pointer" }} onClick={onCancel} />
        </div>

    )
}

export default Input;