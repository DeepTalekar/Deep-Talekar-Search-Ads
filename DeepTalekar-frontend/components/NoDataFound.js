import Lottie from 'lottie-react';
import NoDataAnimation from "@/lottie/no-data.json"

export default function NoDataFound() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <Lottie
                className='w-40 h-40'
                animationData={NoDataAnimation}
                autoplay={true}
                autoPlay={true}
                loop={false}
            />

            <p className='text-opacity-0 font-sans font-semibold text-xl transition-opacity duration-300'>Uh oh! No Data Found ❌</p>

        </div>
    )
}
