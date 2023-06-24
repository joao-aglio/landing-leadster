import { videoType } from "@/modules/types/videoType";
import Image from "next/image";

const Video = ({ video }: { video: videoType }) => {

    return (
        <button className="m-5 max-w-[362px] flex flex-col w-50 bg-white rounded-3xl overflow-hidden shadow-[2px_50px_84px_-6px_rgba(194,202,209,0.65)] hover:bg-gray-100">
            <div className="relative">
                <Image width={362} height={204} alt='' src={video.thumbnail} className="mb-2 text-2xl font-bold tracking-tight text-gray-900"/>
            </div>
            <p className="text-[#1C3C50] hover:text-[#2c83fb] text-[17px] text-justify px-10 py-5 font-extrabold">{video.titulo}</p>
        </button>
    )
}

export default Video;