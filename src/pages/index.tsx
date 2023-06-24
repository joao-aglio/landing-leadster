import Image from 'next/image';
import useVideo from '@/hooks/useVideo';
import Video from '@/components/Video';
import ColumnCenter from '@/components/ColumnCenter';
import RowCenter from '@/components/RowCenter';
import Head from "next/head";
import Link from 'next/link';
import Section from '@/components/Section';
import RowStart from '@/components/RowStart';

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

                <Section classes='bg-[#F0F8FF]'>

                    <ColumnCenter classes='h-[80vh] text-center p-10'>

                        <div className='animate__animated animate__slideInRight rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl flex pt-1 pb-1 pr-4 pl-4 mb-3 border-[#0084FF] border-2 border-solid'>
                            <p className='text-[#0084FF] font-bold text-sm'>WEBINARS EXCLUSIVOS</p>
                        </div>

                        <div className="animate__animated animate__slideInLeft whitespace-nowrap flex flex-col">
                            <p className='font-medium sm:text-[40px] mb-1 text-xl text-[#1C3C50]'>Menos Conversinha,</p>
                            <div className='mt-1'>
                                <p style={
                                    {
                                        backgroundRepeat: "repeat",
                                        backgroundSize: "100%",
                                        WebkitTextFillColor: "transparent",
                                        WebkitBackgroundClip: "text",
                                        backgroundImage: "linear-gradient(-45deg, #2c83fb, #1f76f0);"
                                    }
                                } className='font-bold sm:text-[80px] text-5xl'>Mais Conversão</p>
                                <Image className="scale-[0.6] sm:scale-100 float-right relative left-5 sm:bottom-[75px] bottom-[53px]" width={49} height={32} src="/assets/asset-header.png" alt='' />
                            </div>

                        </div>

                        <div className='pr-10 pl-10 animate__animated animate__slideInRight'>
                            <hr className='border mb-5'></hr>
                            <p className='text-[#1C3C50] text-md font-semibold'>Conheça as estratégias que <span className='font-bold'>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
                        </div>

                    </ColumnCenter>

                </Section>


                <Section classes='bg-[#FFFFFF]'>

                    <RowCenter classes=''>
                        {videos?.map((video) => {
                            return <Video video={video} />
                        })}
                    </RowCenter>

                </Section>

                <Section classes='bg-[#F0F8FF] h-[80vh]'>

                    <RowCenter classes='p-10'>

                        <div className="sm:pr-10 pr-0">
                            <Image src="/assets/comparativo_img_CTA.png" width={739} height={687} alt="" />
                        </div>
                        <div className="flex flex-col text-justify justify-center">
                            <p className='font-medium sm:text-[40px] sm:mb-5 mb-1 text-xl text-[#1C3C50]'>Pronto pra triplicar sua</p>
                            <p className='font-bold sm:text-[40px] sm:mb-1 mb-1 text-xl text-[#1C3C50]'>Geração de Leads?</p>
                            <p className='font-medium sm:text-[20px] sm:mt-5 mb-5 text-xl text-[#1C3C50]'>Criação e ativação em
                                <span className="font-extrabold"> 4 minutos.</span>
                            </p>
                            <hr className='border'></hr>
                            <RowStart classes="mt-5">
                                <button className='text-white font-semibold rounded-full bg-[#0083FF] pr-10 pl-10'>
                                    VER DEMONSTRAÇÃO
                                </button>
                                <div className="justify-between flex flex-col">
                                    <Image src="/assets/selo_RD.png" width={205} height={73} alt="" />
                                </div>
                            </RowStart>
                            <RowCenter classes='mt-4'>
                                <Image className="h-max mr-1 relative top-1" src="/assets/no-card-dark.webp" width={16} height={16} alt="" />
                                <p className='m-1 text-center'>
                                    <span className='font-semibold'>Não é </span>necessário Cartão de Crédito<span> |</span></p>
                                <Image className="h-max relative top-1" src="/assets/rating.webp" width={92} height={16} alt="" />
                                <p className='text-center'><span>4.9/5 média de satisfação </span></p>

                            </RowCenter>
                        </div>

                    </RowCenter>

                </Section>

            </main>

        </>
    )
}

export default index;