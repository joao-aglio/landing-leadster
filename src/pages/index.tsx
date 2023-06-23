import Image from 'next/image';
import useVideo from '@/hooks/useVideo';
import Video from '@/components/Video';
import ColumnSection from '@/components/ColumnSection';
import RowSection from '@/components/RowSection';
import Head from "next/head";
import Link from 'next/link';

const index = () => {

    const videos = useVideo();

    return (

        <>
            <Head>
                <title>Leadster</title>
                <meta name="description" content="Landing page da Leadster!" />
                <link rel="icon" href="/assets/asset-header.png" />
            </Head>

            <main>

                <ColumnSection classes='bg-[#F0F8FF]'>

                    <div className='animate__animated animate__slideInRight rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl flex pt-1 pb-1 pr-4 pl-4 mb-3 border-[#0084FF] border-2 border-solid'>
                        <p className='text-[#0084FF] font-bold'>WEBINARS EXCLUSIVOS</p>
                    </div>

                    <div className="animate__animated animate__slideInLeft whitespace-nowrap flex flex-col">
                        <p className='font-medium sm:text-4xl text-xl'>Menos Conversinha,</p>
                        <div className='mt-1'>
                            <p className='font-bold sm:text-7xl text-5xl'>Mais Conversão</p>
                            <Image className="scale-75 sm:scale-100 float-right relative left-5 sm:bottom-[75px] bottom-[55px]" width={49} height={32} src="/assets/asset-header.png" alt='' />
                        </div>
                    </div>

                    <div>
                        <hr className='mt-5 mb-5'></hr>
                    </div>

                    <div className='animate__animated animate__slideInRight'>
                        <p className='text-lg font-medium'>Conheça as estratégias que <span className='font-bold'>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
                    </div>

                </ColumnSection>

                <RowSection classes='bg-[#FFFFFF]'>

                    {videos?.map((video) => {
                        return <Video video={video} />
                    })}

                </RowSection>

            </main>

        </>
    )
}

export default index;