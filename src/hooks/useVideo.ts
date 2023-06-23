import { videoType } from "@/modules/types/videoType";
import { useEffect, useState } from "react";

export default function useVideo() {

    const [videos, setVideos] = useState<videoType[]>();

    async function fetchVideos(){

        const res = await fetch('/data.json');
        const data = await res.json();

        setVideos(data);
    }

    useEffect(() => {
        fetchVideos();
    }, []);

    return videos;
}

