import { useEffect, useState } from "react";
import RecipeReviewCard from "./components/demo"

const LifeSavings = (props) => {
    const { expenditure } = props;
    const [recipieReviewCards, setRecipieReviewCards] = useState([])

    useEffect(() => {
        expenditure.map((element) => {
            console.log(element.bill)
            console.log(element.timeframe)
            return element;
        })

        const arr = []
        let count = -1
        for (let i = 2024; i <= 2024 + 30; i +=1) {
                const yearExpenditure = []
                expenditure.map((element) => {
                    if (element.timeframe >= i - 2024) {
                        yearExpenditure.push({
                            name: element.name,
                            timeframe: element.timeframe - i + 2024,
                            bill: element.bill
                        })
                    }
                })
                count += 1
                arr.push(<RecipeReviewCard key={i} year={i} expenditure={yearExpenditure} />)
        }
        setRecipieReviewCards(arr)
    }, [expenditure])

    return (
        <>
            {recipieReviewCards}
        </>
    )
}

export default LifeSavings