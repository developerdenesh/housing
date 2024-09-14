const SectionTwoInput = (props) => {
    const { setCPF, setCash } = props;
    const onChangeCPF = (e) => setCPF(e.target.value);
    const onChangeCash = (e) => setCash(e.target.value);

    return (
        <>
            <input
                style={{ "display": "block", "textAlign": "center" }}
                type="cpf"
                name="cpf"
                placeholder="How much CPF to contribute?"
                onChange={onChangeCPF}
            />
            <input
                style={{ "display": "block", "textAlign": "center" }}
                type="cash"
                name="cash"
                placeholder="How much cash to contribute?"
                onChange={onChangeCash}
            />
        </>
    )
}

export default SectionTwoInput