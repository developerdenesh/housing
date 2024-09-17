import { useEffect, useState } from "react";
import RecipeReviewCard from "./components/demo"

const LifeSavings = (props) => {
    const { expenditure } = props;
    const [recipieReviewCards, setRecipieReviewCards] = useState([])

    useEffect(() => {
        const arr = []
        for (let i = 2024; i <= 2024 + 30; i +=1) {
                const yearExpenditure = []
                expenditure.map((element) => {
                    if (element.type === false) {
                        yearExpenditure.push({
                            name: element.name,
                            type: "single",
                            year: element.year,
                            bill: element.bill
                        })

                        return element
                    }

                    if (element.timeframe >= i - 2024) {
                        yearExpenditure.push({
                            name: element.name,
                            type: "monthly",
                            timeframe: element.timeframe - i + 2024,
                            bill: element.bill
                        })
                    }
                })
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