import Image from "next/image";

const Footer = () => {
    return (

        <footer className="fixed">

            <div className="bg-[#FFFFFF] fixed z-10 left-0 flex p-10 w-screen justify-center">
                <Image
                    src="/assets/logo.png"
                    width={194}
                    height={42}
                    alt=''
                />
            </div>

        </footer>
    )

};

export default Footer;