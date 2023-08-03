import { VFC } from 'react';
import Image from 'next/image';
import Button from './button';
import styles from '../styles/Home.module.css'


const Header: VFC = () => {
    return (
        <>
            <div className='header'>
                <div className={`${styles.container} headerContainer`}>
                    <div className="image">
                        <Image src='/vercel.svg' width={200} height={25} />
                    </div>
                    <div className='right'>
                        <a className='lists' href="/">Index</a>
                        <a className='lists' href="/">About</a>
                        <div id="menu-bar">
                            <Button
                                link="www.google.com"
                                text="Upload your story"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .header {
                    box-shadow: 0 8px 8px rgb(0 0 0 / 0.06);
                }
                .headerContainer {
                    display: flex;
                    align-items: center;
                    height: 90px;
                }
                .image {
                    display: inline-box;
                    height: full;
                    width: 20%;
                }
                .lists {
                    font-size: 1.2rem;
                    font-weight: bold;
                }
                .right {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 3rem;
                    width: 80%;
                }
            `}</style>
        </>
    )
}

export default Header;