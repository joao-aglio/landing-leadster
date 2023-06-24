
import { videoType } from "@/modules/types/videoType";
import Image from "next/image";
import useHover from "@/hooks/useHover";
import useModal from "../../hooks/useModal";

const Video = ({ video }: { video: videoType }) => {

    const { handleMouseLeave, handleMouseOver, hover } = useHover();
    const { openModal } = useModal();

    return (
        <button onMouseOver={handleMouseOver} onClick={openModal} onMouseLeave={handleMouseLeave} className="text-[#1C3C50] hover:text-[#2c83fb] text-[17px] text-justify cursor-pointer m-5 max-w-[362px] flex flex-col w-50 bg-white rounded-3xl overflow-hidden shadow-[2px_50px_84px_-6px_rgba(194,202,209,0.65)] hover:bg-gray-100">
            
            <div className="relative">
                <Image width={362} height={204} alt='' src={video.thumbnail} className="mb-2 text-2xl font-bold tracking-tight text-gray-900" />
            </div>
            <p className="px-10 py-5 font-extrabold">{video.titulo}</p>
            <div className={`absolute w-[345px] h-[195px] ${hover ? "visible" : "invisible"} bg-[#2c83fb60] rounded-t-2xl flex justify-center flex-row place-items-center`}>
                <svg className="drop-shadow-xl" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" version="1.1" id="Capa_1" width="60" height="60" viewBox="0 0 163.861 163.861">
                    <g >
                        <path d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275   c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z" />
                    </g>
                </svg>
            </div>
        </button>
    )
}

export default Video;