import { VFC } from "react";

type Props = {
    image: string;
    title: string;
}

const IntroducingCard : VFC<Props> = ({image, title}) => {
    return(
        <div>
            <img src={image} alt={title}/>
            <div>{title}</div>
        </div>
    )
}

export default IntroducingCard;