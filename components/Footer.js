import FooterStyle from '../styles/Footer.module.scss';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const Footer = () => {

    gsap.registerPlugin(ScrollTrigger)

    const footerTitle = useRef()
    useEffect(() => {
        const footerTitleTL = footerTitle.current
        gsap.fromTo(footerTitleTL, { opacity: 0, y: 80 }, { opacity: 1, y:0, scrollTrigger: { trigger: footerTitleTL } })
    })

    return(
        <footer id="contacts" className={`${FooterStyle.footer} fullWidthContainer`}>
            <h2 className={`${FooterStyle.footer__title} title`} ref={footerTitle}>Let’s get in touch!</h2>
            <div className={FooterStyle.footer__contacts}>
                <div className={FooterStyle.footer__contacts__main}>
                    <a href="emailto:info@smart-x.it">info@smart-x.it</a>
                    <a href="tel:+390250308452">+39 0250308452</a>
                </div>
                <div className={FooterStyle.footer__contacts__social}>
                    <a href="">Linkedin</a>
                    <a href="">Instagram</a>
                </div>
            </div>
            <div className={`${FooterStyle.copyright} small`}>
                <a href="" className={`${FooterStyle.copyright__privacy}`}>privacy & cookies policy</a>
                <p className={`${FooterStyle.copyright__rights}`}>© Smart X SRLs 2022 All rights reserved</p>
                <div className={`${FooterStyle.copyright__location}`} style={{display: "flex", alignItems: "center", gap: ".25rem"}}>
                    <div className={FooterStyle.copyright__locationDot} style={{width: "6px", height: "6px", backgroundColor: "black", borderRadius: "3px"}}></div>
                    <p>Milan - Italy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer