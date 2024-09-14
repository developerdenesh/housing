'use client'

import { useEffect, useState } from "react";


const Input = (props) => {
    const { type, name, placeholder, onSubmit } = props;

    const [value, setValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    const onChange = (e) => {
        // Remove all commas or pecentage signs
        setValue(
            e.target.value
                .replaceAll("$", "")
                .replaceAll(",", "")
        );
    }

    const formatValue = (value) => {
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

    const addPercentage = (value) => (value.length > 0) ? ("$" + value) : (value)

    useEffect(() => {
        // Submit clean values only
        onSubmit({
            name: name,
            value: value,
        })

        // For visualisation add the price format
        if (name === "price") {
            const formattedValue = formatValue(value)
            const formattedValueWithPercentage = addPercentage(formattedValue)
            setInputValue(formattedValueWithPercentage)
            return
        }

        setInputValue(value)

    }, [value])

    return (
        <input
            style={{ "display": "block", "textAlign": "center" }}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            value={inputValue}
        />
    )
}

export default Input;