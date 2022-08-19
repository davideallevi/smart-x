import Image from 'next/image'
import Link from 'next/link'
import NavStyle from '../styles/Nav.module.scss'

const Layout = () => {
    return(
        <nav className={NavStyle.nav}>
            <Image src="/smart-x__logo.svg" alt="Smart X Logo" width={187} height={30} />
            <ul className={NavStyle.nav__list}>
                <li className={NavStyle.nav__list__item}>
                    <Link href="#services">lab</Link>
                </li>
                <li className={NavStyle.nav__list__item}>
                    <Link href="#vision">vision</Link>
                </li>
                <li className={NavStyle.nav__list__item}>
                    <Link href="#contacts">contacts</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Layout