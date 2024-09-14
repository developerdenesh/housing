import Input from "./input"
import { useState, useEffect } from "react";

const MassiveForm = (props) => {
    const { calculateInitialValue, initialValue, onSubmit } = props;

    return (
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
                    initialValue={initialValue}
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
    )
}

export default MassiveForm