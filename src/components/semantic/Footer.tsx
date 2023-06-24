import Image from "next/image";
import ColumnCenter from "../flex/ColumnCenter";
import RowCenter from "../flex/RowCenter";
import Link from "next/link";

const Footer = () => {
    return (

        <footer className="sticky pt-10">

            <ColumnCenter classes="py-8 bg-[#FFFFFF] justify-center place-items-center">
                <Image
                    src="/assets/img/logo.png"
                    width={250}
                    height={50}
                    alt=''
                />
                <p className="mt-1 text-[#578696] text-sm">Tranformando visitantes em clientes.</p>

                <RowCenter classes="mt-8 sm:gap-40 gap-20">

                    <ColumnCenter>
                        <p className="py-3 font-extrabold text-[#3A4251]">Links Principais</p>
                        <Link href="" className="text-[#578696] py-3">Home</Link>
                        <Link href="" className="py-3 text-[#578696]">Ferramenta</Link>
                        <Link href="" className="py-3 text-[#578696]">Preços</Link>
                        <Link href="" className="py-3 text-[#578696]">Contatos</Link>
                    </ColumnCenter>

                    <ColumnCenter>
                        <p className="py-3 font-extrabold text-[#3A4251]">Cases</p>
                        <Link href="" className="py-3 text-[#578696]">Home</Link>
                        <Link href="" className="py-3 text-[#578696]">Ferramenta</Link>
                        <Link href="" className="py-3 text-[#578696]">Preços</Link>
                        <Link href="" className="py-3 text-[#578696]">Contatos</Link>

                    </ColumnCenter>

                    <ColumnCenter>
                        <p className="py-3 font-extrabold text-[#3A4251]">Materiais</p>
                        <Link href="" className="py-3 text-[#578696]">Home</Link>
                        <Link href="" className="py-3 text-[#578696]">Ferramenta</Link>
                        <Link href="" className="py-3 text-[#578696]">Preços</Link>
                        <Link href="" className="py-3 text-[#578696]">Contatos</Link>
                    </ColumnCenter>

                    <ColumnCenter>
                        <p className="py-3 font-extrabold text-[#3A4251]">Siga a Leadster</p>
                        <Link href="" className="py-3 text-[#578696]">Home</Link>
                        <Link href="" className="py-3 text-[#578696]">Ferramenta</Link>
                        <Link href="" className="py-3 text-[#578696]">Preços</Link>
                        <Link href="" className="py-3 text-[#578696]">Contatos</Link>
                    </ColumnCenter>

                </RowCenter>


            </ColumnCenter>

        </footer>
    )

};

export default Footer;