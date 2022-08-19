import IntroStyle from '../styles/Intro.module.scss';

const Intro = () => {
    return(
        <section id="intro" className={`${IntroStyle.intro} fullWidthContainer`}>
            <div className={IntroStyle.intro__content}>
                <h1 className={IntroStyle.intro__content__title}>Innovation-driven <span>design lab</span></h1>
                <p className={IntroStyle.intro__content__description}>
                We collaborate with those who create the future, handling positive impact projects through what we do best: design, communicate and promote innovative products and services.
                </p>
            </div>
        </section>
    )
}

export default Intro