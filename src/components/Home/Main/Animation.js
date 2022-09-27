import Lottie from "react-lottie-player";
import lottieJson from "../../../../public/animation.json";

export const Animation = () => {
  return <Lottie loop animationData={lottieJson} play style={{ width: `100%`, height: `100%` }} />;
};
