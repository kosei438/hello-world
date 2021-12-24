import { VFC } from "react";
import IntroducingCard from "../introducingCard"

const CardsSection : VFC = () => {
    return (
        <>
            <div>
                hello
            </div>
            <IntroducingCard
                image="/mars.jpg"
                title="Mars"
            />
        </>
    )
}

export default CardsSection;