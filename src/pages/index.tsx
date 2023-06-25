import Head from "next/head";
import Section from '@/components/semantic/Section';
import RowOptions from '@/components/home/RowOptions'
import SectionPrincipal from '@/components/home/SectionPrincipal'
import SectionLeads from '@/components/home/SectionLeads';
import SectionVideos from '@/components/home/SectionVideos';
import ModalMain from '@/components/home/ModalMain';
import Footer from "@/components/semantic/Footer";
import Header from "@/components/semantic/Header";

const index = () => {

    return (

        <>
            <Head>
                <title>Leadster</title>
                <meta name="description" content="Landing page da Leadster!" />
                <link rel="icon" href="/assets/img/logo.ico" />
            </Head>

            <ModalMain />

            <Header/>

                <Section classes='bg-[#F0F8FF]'>

                    <SectionPrincipal />

                </Section>


                <Section classes='bg-[#FFFFFF]'>

                    <SectionVideos />

                </Section>

                <Section classes='bg-[#F0F8FF]'>

                    <SectionLeads />

                </Section>

            <Footer/>

        </>
    )
}

export default index;