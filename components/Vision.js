import VisionStyle from '../styles/Vision.module.scss'
//import Image from 'next/image'

const Vision = () => {
    return(
        <section id="vision" className={`${VisionStyle.vision} fullWidthContainer`}>
            <div className={VisionStyle.vision__animation} style={{position: "relative"}}>
                {/*<Image src="/vision-illustration.png" alt="vision" layout="fill" objectFit="contain" /> */}
            </div>
            <div className={`${VisionStyle.vision__text}`}>
                <p style={{fontSize: "clamp(2rem, 4vw, 2.4rem)", fontWeight: "300"}}><span style={{color: "#CCFF14",}}>A hybrid approach:</span><br />we involve different disciplines and resources to outline the best path for your project.</p>
            </div>
        </section>
    )
}

export default Vision