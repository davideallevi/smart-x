import ServicesStyle from '../styles/Services.module.scss'
import Image from 'next/dist/client/image'

const Services = () => {
    return(
        <section id='services' className={`${ServicesStyle.services}`}>
            <ul className={ServicesStyle.services__list}>
                <li className={`${ServicesStyle.services__singleService} fullWidthContainer`}>
                    <div className={ServicesStyle.services__singleService__content}>
                        <Image src="/X-create.svg" alt="create" width={125} height={131} />
                        <h3 className={`${ServicesStyle.services__singleService__content__title} title`}>create</h3>
                        <p className={`${ServicesStyle.services__singleService__content__description} lead`}>We shape your innovative products, both industrial and digital, implementing the best technical solutions through a multidisciplinary approach.</p>
                        <ul className={ServicesStyle.services__singleService__content__skills}>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Industrial Design</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Product Engineering</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>3D digital product creation</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Prototyping</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>User Experience Design</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Software engineering</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>User Interface Design</h6></li>
                        </ul>
                    </div>
                </li>
                <li className={`${ServicesStyle.services__singleService} fullWidthContainer`}>
                    <div className={ServicesStyle.services__singleService__content}>
                        <Image src="/X-build.svg" alt="create" width={125} height={131} />
                        <h3 className={`${ServicesStyle.services__singleService__content__title} title`}>build</h3>
                        <p className={`${ServicesStyle.services__singleService__content__description} lead`}>We develop your brand creating unique meanings around it, connecting your company to the potential audiences through a tangible customer experience, reaching and engaging your prospects.</p>
                        <ul className={ServicesStyle.services__singleService__content__skills}>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Brand design and positioning</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Content strategy</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Digital Marketing</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Graphic and Web design</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>3D Rendering and CGI</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Motion graphics design</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Shooting and film</h6></li>
                        </ul>
                    </div>
                </li>
                <li className={`${ServicesStyle.services__singleService} fullWidthContainer`}>
                    <div className={ServicesStyle.services__singleService__content}>
                        <Image src="/X-startup.svg" alt="create" width={125} height={131} />
                        <h3 className={`${ServicesStyle.services__singleService__content__title} title`}>start up</h3>
                        <p className={`${ServicesStyle.services__singleService__content__description} lead`}>Safeguard your innovative ideas and enable opportunities by connecting your company with different touch points we address, developing your business both internally and externally.</p>
                        <ul className={ServicesStyle.services__singleService__content__skills}>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>innovation advisorment</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Patenting and legal support</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Resource management</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Business development</h6></li>
                            <li className={ServicesStyle.services__singleService__content__skills__singleSkill}><h6 className={`small`}>Risk management</h6></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Services