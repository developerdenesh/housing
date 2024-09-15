import { useState } from "react";
import { formatValue, addPercentage } from "./input";

const SectionTwoInput = (props) => {
    const { setCPF, setCash } = props;
    const [cashValue, setCashValue] = useState(0);
    const [cpfValue, setCPFValue] = useState(0);

    const onChangeCPF = (e) => {
        const filtered = e.target.value
            .replaceAll("$", "")
            .replaceAll(",", "")

        setCPF(filtered)
        setCPFValue(addPercentage(formatValue(filtered)))
    }

    const onChangeCash = (e) => {
        const filtered = e.target.value
            .replaceAll("$", "")
            .replaceAll(",", "")

        setCash(filtered);

        setCashValue(addPercentage(formatValue(filtered)))
    }

    return (
        <>
            <label htmlFor="cpf" >CPF:&nbsp;</label>
            <input
                style={{ display: "block", textAlign: "center", height: "30px" }}
                size="50"
                id="cpf"
                type="cpf"
                name="cpf"
                placeholder="How much CPF to contribute?"
                onChange={onChangeCPF}
                value={cpfValue}
            />
            <label htmlFor="cash" >Cash:&nbsp;</label>
            <input
                style={{ display: "block", textAlign: "center", height: "30px" }}
                size="50"
                id="cash"
                type="cash"
                name="cash"
                placeholder="How much cash to contribute?"
                onChange={onChangeCash}
                value={cashValue}
            />
        </>
    )
}

export default SectionTwoInput