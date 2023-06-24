import RowOptions from "@/components/home/RowOptions";
import ColumnCenter  from "@/components/flex/ColumnCenter";
import Grid  from "@/components/ui/Grid";
import useVideo from "@/hooks/useVideo";
import Video from "@/components/ui/Video";
import Pagination from "@/components/home/Pagination";

const SectionVideos = () => {

    const videos = useVideo();

    return (

        <ColumnCenter classes="max-w-[1150px] mx-auto pt-20">

            <RowOptions>

            </RowOptions>

            <Grid>

                {videos?.map((video) => {
                    return <Video video={video} />
                })}

            </Grid>

            <Pagination quantidade={4}/>

        </ColumnCenter>

    );
}

export default SectionVideos;