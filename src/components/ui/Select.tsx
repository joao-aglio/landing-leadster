import { Button } from "@/modules/types/buttonType";

const Select = (props: Button) => {

    return (
        <button className="flex relative items-center hover:text-[#2c83fb] text-[#1C3C50] border-[#1C3C50] rounded-xl hover:border-[#2c83fb] border-[1px] mr-4 border-solid px-3 mt-5 sm:mt-0">
            <span className="font-semibold">{props.texto ? props.texto : ""}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M12 14l-4-4h8z" />
                </g>
            </svg>
        </button>
    );
}

export default Select;