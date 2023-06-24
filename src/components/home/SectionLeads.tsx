import RowCenter from "@/components/flex/RowCenter";
import RowStart from "@/components/flex/RowStart";
import Image from "next/image";
import ColumnCenter from "@/components/flex/ColumnCenter";
import BlueButton from "@/components/ui/BlueButton";

const SectionLeads = () => {
    return (

        <RowCenter classes='p-10'>

            <div className="sm:pr-10 pr-0">
                <Image src="/assets/img/comparativo_img_CTA.png" width={739} height={687} alt="" />
            </div>

            <ColumnCenter>
                <p className='font-medium sm:text-[40px] sm:mb-5 mb-1 text-xl text-[#1C3C50]'>Pronto pra triplicar sua</p>
                <p className='font-bold sm:text-[40px] sm:mb-1 mb-1 text-xl text-[#1C3C50]'>Geração de Leads?</p>
                <p className='font-medium sm:text-[20px] sm:mt-5 mb-5 text-xl text-[#1C3C50]'>Criação e ativação em
                    <span className="font-extrabold"> 4 minutos.</span>
                </p>
                <hr className='border'></hr>
                <RowStart classes="mt-5 sm:justify-start justify-center">
                    <BlueButton/>
                    <div className="justify-between flex flex-col sm:mt-0 mt-3">
                        <Image src="/assets/img/selo_RD.png" width={205} height={73} alt="" />
                    </div>
                </RowStart>
                <RowCenter classes='mt-5'>
                    <Image className="h-max relative top-1 mr-1" src="/assets/img/no-card-dark.webp" width={16} height={16} alt="" />
                    <p className='mr-1 text-center'>
                        <span className='font-semibold'>Não é </span>necessário Cartão de Crédito<span> |</span></p>
                    <Image className="h-max relative top-1 mr-1" src="/assets/img/rating.webp" width={92} height={16} alt="" />
                    <p className='text-center'><span className='font-semibold'>4.9</span>/5 média de satisfação </p>

                </RowCenter>
            </ColumnCenter>

        </RowCenter>

    );
}

export default SectionLeads;