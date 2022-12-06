import IntroStyle from '../styles/Intro.module.scss';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Intro = () => {
    let titleRef = useRef(null)
    let descriptionRef = useRef(null)

    useEffect(() => {
        let titleTl = titleRef.current
        gsap.fromTo(titleTl, {y: 100}, {duration: 1, y: 0})
    }, [])
    
    useEffect(() => {
        let descriptionTL = descriptionRef.current
        gsap.fromTo(descriptionTL, {y: 100, opacity: 0}, {opacity: 1, duration: 1, delay: .5, y: 0})
    }, [])

    const intro = useRef()
    useEffect(() => {
        if (intro) {ScrollTrigger.refresh()};
    })
    return(
        <section id="intro" className={`${IntroStyle.intro} fullWidthContainer`} ref={intro}>
            <div className={IntroStyle.intro__content}>
                <h1 className={IntroStyle.intro__content__title} ref={titleRef}>Innovation-driven <span>design lab</span></h1>
                <p className={IntroStyle.intro__content__description} ref={descriptionRef}>
                We collaborate with those who create the future, handling positive impact projects through what we do best: design, communicate and promote innovative products and services.
                </p>
            </div>
        </section>
    )
}

export default Intro