import { setModal } from "@/redux/action";

import { Dispatch } from "redux";

export const changeModal = (newState) => (dispatch) => {

    dispatch(setModal(newState));

}