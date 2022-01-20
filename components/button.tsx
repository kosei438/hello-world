// 簡易的なボタンコンポーネントを作成。
import { VFC } from "react";

type Props = {
    link: string;
}


const Button: VFC<Props> = ({ link }) => {

    return (
        <>
            <a href={link.toString()} rel="noreferrer noopener">
                click here
            </a>
            <style jsx>{`
                a {
                    border: solid;
                    padding: 1rem;
                    background-color: black;
                    color: white;
                    margin: 3rem;
                    border-radius: 1rem;
                }
            `}</style>
        </>
    )
}

export default Button;