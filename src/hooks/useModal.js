import { useState } from "react";
import { useSelector, useDispatch, TypedUseSelectorHook,  } from "react-redux";
import { changeModal } from "../redux/thunk";

const useModal = () => {

    const dispatch = useDispatch();

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        dispatch(changeModal(true));
        setIsOpen(true);
    }

    function closeModal() {
        dispatch(changeModal(false));
        setIsOpen(false);
    }

    return { modalIsOpen, closeModal, openModal};
}

export default useModal