import CreateStyle from "../styles/Create.module.scss"
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from 'react';

const createSkills = [
    {skill: "Industrial Design"},
    {skill: "Product Engineering"},
    {skill: "3D digital product creation"},
    {skill: "Prototyping"},
    {skill: "User Experience Design"},
    {skill: "Software engineering"},
    {skill: "User Interface Design"}
]

const Create = () => {

    gsap.registerPlugin(ScrollTrigger)

    const createSkillsRefs = useRef([])

    useEffect(() => {
        createSkillsRefs.current.forEach((createSkillsRefsTL, index) => {
            gsap.fromTo(createSkillsRefsTL,
                { y: 80, opacity: 0, transform: "skew(0,10deg)"},
                { y: 0, opacity: 1, transform: "skew(0,0)",
                    scrollTrigger: {
                        id: `skill-${index+1}`, trigger: createSkillsRefsTL, start: "top bottom", end: "top 85%", scrub: 3
                    }
                }
            )
        })
    }, [])

    const addToCreateSkills = (createSkillsRefsTL) => {
        if(createSkillsRefsTL && !createSkillsRefs.current.includes(createSkillsRefsTL)){
            createSkillsRefs.current.push(createSkillsRefsTL)
        }
    }

    return(
        <section className={`${CreateStyle.create} fullWidthContainer`}>
            <h3 className={`${CreateStyle.create__title} title`} ref={addToCreateSkills}>create</h3>
            <div className={`${CreateStyle.create__content}`}>
                <p className={`${CreateStyle.create__content__description} lead` } ref={addToCreateSkills}>
                    We shape your innovative products, both industrial and digital, implementing the best technical solutions through a multidisciplinary approach.
                </p>
                <ul className={`${CreateStyle.create__content__skills}`}>
                    {
                        createSkills.map(({skill}) => {
                            return(
                                <li key={skill} ref={addToCreateSkills} className={`${CreateStyle.create__content__skills__singleskill}`}><h6 className={`small`}>{skill}</h6></li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Create