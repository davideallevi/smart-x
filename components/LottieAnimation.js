import Lottie from "react-lottie-player"
import lottieJson from '../public/x-animation.json'
import LottieAnimationStyle from '../styles/LottieAnimation.module.scss'

const LottieAnimation = () => {
    return(
        <Lottie
            loop
            animationData={lottieJson}
            play
            className={LottieAnimationStyle.lottieAnimation}
        />
    )
}

export default LottieAnimation