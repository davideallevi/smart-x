import PartnersStyle from '../styles/Partners.module.scss';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const partners = [
    { partner: { id: "1", name: "Visual Ads", src: "/logo-partner__visual-ads.svg", alt: "visual ads, visual-ads, ads-visual", website: "https://www.ads-visual.com/", width: "234", height: "24" } },
    { partner: { id: "2", name: "IMCK Italia", src: "/logo-partner__imck-italia.svg", alt: "imck, imck-italia, imck italia", website: "http://www.imck-italia.it/", width: "181", height: "27" } },
    { partner: { id: "3", name: "XKO", src: "/logo-partner__xko.svg", alt: "xko, xko lab, footwear technlogies, xko footwear technologies, xko lab footwear technologies", website: "https://www.xko-lab.com/", width: "254", height: "43" } },
    { partner: { id: "4", name: "Samar Innovation", src: "/logo-partner__samar-innovation.svg", alt: "samar innovation, innovating for passion", website: "https://www.samarinnovation.it/", width: "400", height: "36" } },
    { partner: { id: "5", name: "GT Talent", src: "/logo-partner__gt-talent.svg", alt: "gt talent, your dream race", website: "https://gttalent.com/", width: "216", height: "53" } },
]

const Partners = () => {

    gsap.registerPlugin(ScrollTrigger)

    const partnersRefs = useRef([])

    useEffect(() => {
        partnersRefs.current.forEach((partnersRefsTL, index) => {
            gsap.fromTo(partnersRefsTL, { opacity: 0, y: 50 }, { opacity: 1, y: 0, scrollTrigger: { trigger: partnersRefsTL } })
        })
    })

    const addToPartners = (partnersRefsTL) => {
        if(partnersRefsTL && !partnersRefs.current.includes(partnersRefsTL)){
            partnersRefs.current.push(partnersRefsTL)
        }
    }
    return(
        <section id="partners" className={`${PartnersStyle.partners} fullWidthContainer`}>
            <h6 className={`${PartnersStyle.partners__tile}`}>our partners:</h6>
            <ul className={PartnersStyle.partners__list}>
                {
                    partners.map(({partner}) => {
                        return(
                            <li key={partner.id} className={PartnersStyle.partners__list__singlePartner} ref={addToPartners}>
                                <a href={partner.website} target="_blank" rel="noopener noreferrer">
                                    <Image src={partner.src} alt={partner.alt} width={partner.width} height={partner.height} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Partners