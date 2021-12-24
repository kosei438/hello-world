import { VFC } from "react";
import introducingCard from "../introducingCard"

const cardsSection : VFC = () => {
    return (
        <>
            <div>
                hello
            </div>
            <introducingCard
                image="/mars.jpg"
                title="Mars"
            />
        </>
    )
}

export default cardsSection;