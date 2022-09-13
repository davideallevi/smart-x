import { useRef, useState, useEffect } from 'react';
import ReactPlayer from 'react-player'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Video = () => {
    
    const [hasWindow, setHasWindow] = useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
        setHasWindow(true);
        }
    }, []);

    const video = useRef()
    useEffect(() => {
        if (video) {ScrollTrigger.refresh()};
    })

    return(
        <section id="video" style={{position: "relative"}} ref={video}>
        {hasWindow &&
                <ReactPlayer
                    url='https://vimeo.com/747219444'
                    width="100vw"
                    height="56.25vw"
                    style={{maxWidth: "100%"}}
                    allow="fullscreen"
                    config={{
                        vimeo: {
                            title: "Smart X Innovation-driven design Lab | Showreel 2022",
                            playerOptions: {
                                autoplay: true,
                                muted: true,
                                loop: true,
                            }
                        }
                    }}
                />
            }
        </section>
    )
}

export default Video