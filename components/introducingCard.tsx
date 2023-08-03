import { VFC } from "react";

type Props = {
    image: string;
    title: string;
}

const IntroducingCard: VFC<Props> = ({ image, title }) => {
    return (

        <>
            <div className="container">
                <img src={image} alt={title} />
                <div className="title">{title}</div>
            </div>
            <style jsx>{`
                img {
                    width: 80%;
                    height: 250px;
                    object-fit: cover;
                    margin: 25px 25px 0px 25px;
                }
                .container {
                    text-align: center;
                    border: solid 1px;
                    border-radius: 30px;
                    width: 350px;
                }
                .title {
                    padding: 20px;
                    font-weight: bold;
                    font-size: 30px;
                }
            `}</style>
        </>
    )
}

export default IntroducingCard;