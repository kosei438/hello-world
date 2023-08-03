import { VFC } from "react";
import IntroducingCard from "../introducingCard"

const CardsSection: VFC = () => {
    return (
        <>
        <section>
            <IntroducingCard
                image="/mars.jpg"
                title="Mars"
            />
            <IntroducingCard
                image="/mars.jpg"
                title="Mars"
            />
        </section>
        <style jsx>{`
            section {
                display: flex;
                justify-content: center;
                gap: 2rem;
                padding: 2rem;
            }
        `}</style>
        </>
    )
}

export default CardsSection;