import Image from "next/image";
import ColumnCenter from "@/components/flex/ColumnCenter";

const SectionPrincipal = () => {

    return (

        <ColumnCenter classes='h-[80vh] text-center place-items-center '>

            <div className='animate__animated animate__slideInRight rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl flex pt-1 pb-1 pr-4 pl-4 mb-3 border-[#0084FF] border-2 border-solid'>
                <p className='text-[#0084FF] font-bold text-[10px] sm:text-sm'>WEBINARS EXCLUSIVOS</p>
            </div>

            <div className="animate__animated animate__slideInLeft whitespace-nowrap flex flex-col">
                <p className='font-medium sm:text-[40px] mb-1 text-[24px] text-[#1C3C50]'>Menos Conversinha,</p>
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
                    <Image className="scale-[0.6] sm:scale-100 float-right relative left-5 sm:bottom-[75px] bottom-[53px]" width={49} height={32} src="/assets/img/asset-header.png" alt='' />
                </div>

            </div>

            <div className='pr-10 pl-10 animate__animated animate__slideInRight'>
                <hr className='border mb-5'></hr>
                <p className='text-[#1C3C50] text-sm sm:text-[16px] font-semibold'>Conheça as estratégias que <span className='font-extrabold'>mudaram o jogo</span> e como aplicá-las no seu negócio</p>
            </div>

        </ColumnCenter>

    );
}

export default SectionPrincipal;