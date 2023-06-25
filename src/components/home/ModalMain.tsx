import Modal from "react-modal";
import { useSelector } from "react-redux";
import ColumnCenter from "../flex/ColumnCenter";
import useModal from "../../hooks/useModal";
import RowStart from "../flex/RowStart";
import DownloadButton from "../ui/DownloadButton";

const ModalMain = () => {

    const modalIsOpen = useSelector((state) => state);
    const { closeModal } = useModal();

    const customStyles = {
        overlay: {
            zIndex: 1000,
            backgroundColor: "#84a9dd3d"
        }
    };

    return (
        <Modal
            isOpen={modalIsOpen as boolean}
            style={customStyles}
            className={"flex m-auto my-10 sm:h-auto h-[750px] max-w-[600px] rounded-2xl justify-center shadow-xl bg-[#ffff] animate__animated animate__fadeInDown"}
            contentLabel="Modal Webinar"
        >
            <ColumnCenter classes="rounded-2xl border-black border-1 overflow-hidden">
                <div className="border-t-8 border-[#2c83fb] overflow-hidden flex flex-row  justify-end ">
                    <button className="mr-3 pt-2 z-10" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" >
                        <path fill="#e0e0e0" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" />
                    </svg>
                    </button>
                </div>
                <p className='sm:px-20 mx-10 mb-8 font-semibold sm:text-[22px] text-[24px] text-[#1C3C50]'><span className="text-[#2c83fb]">Webinar: </span>Como aumentar sua Gerção de Leads feat. Traktor</p>
                <iframe className="max-w-[600px] h-[380px]" src="https://www.youtube.com/embed/Ntyo6JIuODI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                <ColumnCenter classes="py-4">
                    <p className='mx-6 font-extrabold font-lg text-[#1C3C50] border-b-2 mb-2 pb-2'>Descrição</p>
                    <p className='mx-6 font-medium font-lg text-justify text-[#1C3C50]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac purus ornare, pretium sem at, hendrerit neque. Nam rutrum mi vel tellus bibendum suscipit.
                    </p>
                    <p className='mt-5 mx-6 font-extrabold font-lg text-[#1C3C50] border-b-2 mb-1 pb-2'>Downloads</p>
                    <RowStart classes="mx-6 mt-1 ">
                        <DownloadButton color="#9FEFDF" colorIcone="#00B387" texto="Spreadsheet.xls"/>
                        <DownloadButton color="#A1D9FF" colorIcone="#008EF0" texto="Document.doc"/>
                        <DownloadButton color="#fff1a0" colorIcone="#A99445" texto="Presentation.ppt"/>
                    </RowStart>
                </ColumnCenter>
            </ColumnCenter>
        </Modal>
    );

}

export default ModalMain;