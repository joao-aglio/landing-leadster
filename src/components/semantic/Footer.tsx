import Image from "next/image";
import ColumnCenter from "../flex/ColumnCenter";
import RowCenter from "../flex/RowCenter";
import Link from "next/link";
import RowStart from "../flex/RowStart";
import * as Icon from 'react-bootstrap-icons';

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

                <RowCenter classes="flstartex- mt-8 sm:gap-40 gap-20">

                    <ColumnCenter classes="items-start	">
                        <p className="py-3 mb-5 font-extrabold text-[#3A4251]">Links Principais</p>
                        <Link href="" className="text-[#578696] py-3">Home</Link>
                        <Link href="" className="py-3 text-[#578696]">Ferramenta</Link>
                        <Link href="" className="py-3 text-[#578696]">Preços</Link>
                        <Link href="" className="py-3 text-[#578696]">Contatos</Link>
                    </ColumnCenter>

                    <ColumnCenter>
                        <p className="py-3 mb-5 font-extrabold text-[#3A4251]">Cases</p>
                        <Link href="" className="py-3 text-[#578696]">Geração de leads B2B</Link>
                        <Link href="" className="py-3 text-[#578696]">Geração de leads em Software</Link>
                        <Link href="" className="py-3 text-[#578696]">Geração de leads em Imobiliaria</Link>
                        <Link href="" className="py-3 text-[#578696]">Cases de Sucesso</Link>

                    </ColumnCenter>

                    <ColumnCenter classes="items-start	">
                        <p className="py-3 mb-5 font-extrabold text-[#3A4251]">Materiais</p>
                        <Link href="" className="py-3 text-[#578696]">Blog</Link>
                        <Link href="" className="py-3 text-[#578696]">Parceria com Agências</Link>
                        <Link href="" className="py-3 text-[#578696]">Guia Definitivo do Marketing</Link>
                        <Link href="" className="py-3 text-[#578696]">Materiais Gratuitos</Link>
                    </ColumnCenter>

                    <ColumnCenter classes="items-start	">
                        <p className="py-3 mb-5 font-extrabold text-[#3A4251]">Siga a Leadster</p>
                        <RowStart classes="mb-10">
                            <Icon.Linkedin className="mx-5 text-[#afb1b4]"/>
                            <Icon.Facebook className="mx-5 text-[#afb1b4]"/>
                            <Icon.Instagram className="mx-5 text-[#afb1b4]"/>
                        </RowStart>
                        <p className="text-[#578696] py-3"><span className="text-black font-medium">E-mail: </span>contato@leadster.com.br</p>
                        <p className="text-[#578696] py-3"><span className="text-black font-medium">Telefone: </span>(42) 98828-9851</p>
                    </ColumnCenter>

                </RowCenter>


                <div className="my-10 flex flex-row flex-wrap justify-between">
                    <p className="text-[#578696] text-sm sm:mx-40">
                        Copyright © 2015 - 2022 Todos os direitos reservados | <span className="text-[#0084FF]">Leadster</span>
                    </p>

                    <p className="text-[#578696] text-sm sm:mx-40">
                        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso
                    </p>
                </div>
            </ColumnCenter>

        </footer>
    )

};

export default Footer;