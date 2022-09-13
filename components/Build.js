import BuildStyle from "../styles/Build.module.scss"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useRef, useEffect } from 'react';

const buildSkills = [
    {skill: "Brand design and positioning"},
    {skill: "Content strategy"},
    {skill: "Digital Marketing"},
    {skill: "Graphic and Web design"},
    {skill: "3D Rendering and CGI"},
    {skill: "Motion graphics design"},
    {skill: "Shooting and film"}
]

const Build = () => {

gsap.registerPlugin(ScrollTrigger)

const buildSkillsRefs = useRef([])

useEffect(() => {
    buildSkillsRefs.current.forEach((buildSkillsRefsTL, index) => {
        gsap.fromTo(buildSkillsRefsTL,
            { y: 80, opacity: 0, transform: "skew(0,10deg)"},
            { y: 0, opacity: 1, transform: "skew(0,0)",
                scrollTrigger: {
                    id: `skill-${index+1}`, trigger: buildSkillsRefsTL, start: "top bottom", end: "top 85%", scrub: 3
                }
            }
        )
    })
}, [])

const addToBuildSkills = (buildSkillsRefsTL) => {
    if(buildSkillsRefsTL && !buildSkillsRefs.current.includes(buildSkillsRefsTL)){
        buildSkillsRefs.current.push(buildSkillsRefsTL)
    }
}

return(
    <section className={`${BuildStyle.build} fullWidthContainer`}>
        <h3 className={`${BuildStyle.build__title} title`} ref={addToBuildSkills}>build</h3>
        <div className={`${BuildStyle.build__content}`}>
            <p className={`${BuildStyle.build__content__description} lead`} ref={addToBuildSkills}>
                We develop your brand creating unique meanings around it, connecting your company to the potential audiences through a tangible customer experience, reaching and engaging your prospects.
            </p>
            <ul className={`${BuildStyle.build__content__skills}`}>
                {
                    buildSkills.map(({skill}) => {
                        return(
                            <li key={skill} ref={addToBuildSkills} className={`${BuildStyle.build__content__skills__singleSkill}`}><h6 className={`small`}>{skill}</h6></li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
)
}

export default Build