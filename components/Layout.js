import Nav from '../components/Nav'
import LayoutStyle from '../styles/Layout.module.scss'
import Footer from './Footer'

const Layout = ({children}) => {
    return(
        <>
        <Nav/>
        <main className={`${LayoutStyle.main} main`}>{children}</main>
        <Footer/>
        </>
    )
}

export default Layout