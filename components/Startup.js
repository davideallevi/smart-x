import StartupStyle from "../styles/Startup.module.scss"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const startupSkills = [
    {skill: "innovation advisorment"},
    {skill: "Patenting and legal support"},
    {skill: "Resource management"},
    {skill: "Business development"},
    {skill: "Risk management"}
]

const Startup = () => {

    gsap.registerPlugin(ScrollTrigger)

    const startupSkillsRefs = useRef([])

    useEffect(() => {
        startupSkillsRefs.current.forEach((startupSkillsRefsTL, index) => {
            gsap.fromTo(startupSkillsRefsTL,
                { y: 80, opacity: 0, transform: "skew(0,10deg)"},
                { y: 0, opacity: 1, transform: "skew(0,0)",
                    scrollTrigger: {
                        id: `skill-${index+1}`, trigger: startupSkillsRefsTL, start: "top bottom", end: "top 85%", scrub: 3
                    }
                }
            )
        })
    }, [])

    const addToStartupSkills = (startupSkillsRefsTL) => {
        if(startupSkillsRefsTL && !startupSkillsRefs.current.includes(startupSkillsRefsTL)){
            startupSkillsRefs.current.push(startupSkillsRefsTL)
        }
    }

    return(
        <section className={`${StartupStyle.startup} fullWidthContainer`}>
            <h3 className={`${StartupStyle.startup__title} title`} ref={addToStartupSkills}>start up</h3>
            <div className={`${StartupStyle.startup__content}`}>
                <p className={`${StartupStyle.startup__content__description} lead`} ref={addToStartupSkills}>
                    Safeguard your innovative ideas and enable opportunities by connecting your company with different touch points we address, developing your business both internally and externally.
                </p>
                <ul className={`${StartupStyle.startup__content__skills}`}>
                    {
                        startupSkills.map(({skill}) => {
                            return(
                                <li key={skill} ref={addToStartupSkills} className={`${StartupStyle.startup__content__skills__singleSkill}`}>
                                    <h6 className={`small`}>{skill}</h6>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Startup