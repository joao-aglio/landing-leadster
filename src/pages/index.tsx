import Head from "next/head";
import Section from '@/components/semantic/Section';
import RowOptions from '@/components/home/RowOptions'
import SectionPrincipal from '@/components/home/SectionPrincipal'
import SectionLeads from '@/components/home/SectionLeads';
import SectionVideos from '@/components/home/SectionVideos';

const index = () => {

    return (

        <>
            <Head>
                <title>Leadster</title>
                <meta name="description" content="Landing page da Leadster!" />
                <link rel="icon" href="/assets/img/asset-header.png" />
            </Head>

            <main>

                <Section classes='bg-[#F0F8FF]'>

                    <SectionPrincipal/>

                </Section>


                <Section classes='bg-[#FFFFFF]'>

                    <SectionVideos/>

                </Section>

                <Section classes='bg-[#F0F8FF] h-[80vh]'>

                    <SectionLeads/>

                </Section>

            </main>

        </>
    )
}

export default index;