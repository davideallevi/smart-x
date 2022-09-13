import VisionStyle from '../styles/Vision.module.scss'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import LottieAnimation from '../components/LottieAnimation'

const Vision = () => {

    gsap.registerPlugin(ScrollTrigger)

    const hybridApproach = useRef()
    const hybridApproach__description = useRef()

    useEffect(() => {
        const hybridApproachTL = hybridApproach.current
        gsap.fromTo(hybridApproachTL, { opacity: 0, x: -80 }, { opacity: 1, x: 0, scrollTrigger: { trigger: hybridApproachTL } })
    }, [])

    useEffect(() => {
        const hybridApproach__descriptionTL = hybridApproach__description.current
        gsap.fromTo(
            hybridApproach__descriptionTL,
            { opacity: 0, x: -80 },
            { opacity: 1, x: 0, scrollTrigger: { trigger: hybridApproach__descriptionTL }}
        )
    }, [])

    return(
        <section id="vision" className={`${VisionStyle.vision} fullWidthContainer`} style={{ position: "relative" }}>
            <LottieAnimation />
            <div className={`${VisionStyle.vision__text}`}>
                <p style={{fontSize: "clamp(2rem, 4vw, 2.4rem)", fontWeight: "300", color: "#CCFF14",}} ref={hybridApproach}>
                    A hybrid approach:
                </p>
                <p style={{fontSize: "clamp(2rem, 4vw, 2.4rem)", fontWeight: "300"}} ref={hybridApproach__description}>
                    we involve different disciplines and resources to outline the best path for your project.
                </p>
            </div>
        </section>
    )
}

export default Vision