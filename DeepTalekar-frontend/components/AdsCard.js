
import Image from 'next/image';
import Link from 'next/link';

export default function AdsCard(props) {
    return (
        <section className='shadow-[0px_8px_16px_rgba(0,0,0,0.15)] flex flex-col rounded-lg '>
            <figure className='relative bg-white pb-[66.66667%] sm:pt-[33.33333%] lg:pt-[66.666667%] overflow-hidden rounded-t-lg'>
                <Image className='bg-no-repeat bg-center object-scale-down absolute h-full w-full' src={props?.imageUrl} fill />
            </figure>
            <article className='flex flex-grow flex-col justify-between p-4'>
                <section>
                    <a href={"https://" + props?.url} target='_blank' className='cursor-pointer rounded-full py-2 px-3 bg-[#14B8A6] text-xs font-bold text-white'>{props?.companyName} 🔗</a>
                    <h2 className='text-xl font-extrabold font-sans text-black mt-3 mb-4'>{props?.headline}</h2>
                    <p className='text-base font-medium font-sans text-[#6B7280]'>{props?.primaryText}</p>
                    {props?.description && (
                        <>
                            <p className='font-semibold text-black text-base mt-3'>Description:</p>
                            <p className='font-sans text-base text-black '>
                                {props?.description}
                            </p>
                        </>
                    )}
                </section>
                <span className='w-max mt-2 bg-[#14B8A6] px-3 py-1 rounded-full text-sm text-white cursor-pointer'>{props?.CTA}</span>
            </article>
        </section>
    )
}