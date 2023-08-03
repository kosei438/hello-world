// 簡易的なボタンコンポーネントを作成。
import { VFC } from "react";

type Props = {
    link: string;
    text: string;
}


const Button: VFC<Props> = ({ link, text }) => {

    return (
        <>
            <a href={link.toString()} rel="noreferrer noopener">
                {text}
            </a>
            <style jsx>{`
                a {
                    border: 1px solid #eaeaea;
                    padding: 1rem;
                    border-radius: 1rem;
                }
                a:hover {
                    color: #0070f3;
                    border-color: #0070f3;
                }
            `}</style>
        </>
    )
}

export default Button;