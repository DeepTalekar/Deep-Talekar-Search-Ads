import Lottie from "lottie-react";
import LoadingAnimation from '@/lottie/loader.json';

export default function Loader() {
    return (
        <div className="flex justify-center items-center w-[90vw] h-[75vh] absolute">
            <Lottie className="w-56 h-56" animationData={LoadingAnimation} autoPlay autoplay loop={true} />
        </div>
    )
}
