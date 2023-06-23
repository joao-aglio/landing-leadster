import { videoType } from "@/modules/types/videoType";
import Image from "next/image";

const Video = ({ video }: { video: videoType }) => {

    return (
        <button className="m-3 flex flex-col max-w-sm bg-white rounded-3xl shadow-[2px_50px_84px_-6px_rgba(194,202,209,0.65)] hover:bg-gray-100">
            <Image width={362} height={204} alt='' src={video.thumbnail} className="mb-2 text-2xl font-bold tracking-tight text-gray-900"/>
            <p className="text-justify p-4 font-medium">{video.titulo}</p>
        </button>
    )
}

export default Video;