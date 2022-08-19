import Nav from '../components/Nav'
import LayoutStyle from '../styles/Layout.module.scss'

const Layout = ({children}) => {
    return(
        <>
        <Nav></Nav>
        <main className={LayoutStyle.main}>{children}</main>
        </>
    )
}

export default Layout