import Link from 'next/link'
import FooterStyle from '../styles/Footer.module.scss';

const Footer = () => {
    return(
        <footer id="contacts" className={`${FooterStyle.footer} fullWidthContainer`}>
            <h2 className='title'>Let’s get in touch!</h2>
            <div className={FooterStyle.footer__contacts}>
                <div className={FooterStyle.footer__contacts__main}>
                    <Link href="emailto:info@smart-x.it">info@smart-x.it</Link>
                    <Link href="tel:+390250308452">+39 0250308452</Link>
                </div>
                <div className={FooterStyle.footer__contacts__social}>
                    <Link href="">Linkedin</Link>
                    <Link href="">Instagram</Link>
                </div>
            </div>
            <div className={`${FooterStyle.copyright} small`}>
                <Link href="">privacy & cookies policy</Link>
                <p>© Smart X SRLs 2022 All rights reserved</p>
                <div style={{display: "flex", alignItems: "center", gap: ".25rem"}}>
                    <div className={FooterStyle.copyright__locationDot} style={{width: "6px", height: "6px", backgroundColor: "black", borderRadius: "3px"}}></div>
                    <p>Milan - Italy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer