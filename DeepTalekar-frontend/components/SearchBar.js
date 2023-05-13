import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline/index"

export default function SearchBar(props) {
    const [keyword, setKeyword] = useState('');

    function handleChange(event) {
        props?.onChange && props?.onChange(event.target.value);

        setKeyword(event.target.value);
    }

    return (
        <label className="relative block w-full h-full lg:max-w-5xl">
            <span className="absolute inset-y-0 left-1 flex justify-center items-center pl-2">
                <MagnifyingGlassIcon className="w-5 h-5 sm:w-6 sm:h-6 md:h-7 md:w-7 lg:w-9 lg:h-9 " color="#181818" />
            </span>
            <input onChange={handleChange} value={keyword} type="text" name="search" className="text-[#181818] text-lg font-semibold block pl-9 sm:pl-10 md:pl-11 lg:pl-14 w-full h-12 px-4 sm:h-14 md:h-16 placeholder:text-base placeholder:text-[#AEAEAE] sm:placeholder:text-lg md:placeholder:text-xl bg-[#F0F0F0] focus:ring-1 focus:ring-[#AEAEAE] focus:outline-none focus:bg-white rounded-full" placeholder="Search" />
        </label>
    )
}
