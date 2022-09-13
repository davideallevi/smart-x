import Image from 'next/image'
//import Link from 'next/link'
import NavStyle from '../styles/Nav.module.scss'

const Nav = () => {
    return(
        <nav className={NavStyle.nav}>
            <Image src="/smart-x__logo.svg" alt="Smart X Logo" width={187} height={30} />
            <ul className={NavStyle.nav__list}>
                <li className={NavStyle.nav__list__item}>
                    <a href="#lab" prefetch="false">lab</a>
                </li>
                <li className={NavStyle.nav__list__item}>
                    <a href="#vision" prefetch="false">vision</a>
                </li>
                <li className={NavStyle.nav__list__item}>
                    <a href="#contacts" prefetch="false">contacts</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav