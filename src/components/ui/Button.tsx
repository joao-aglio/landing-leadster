import { Button } from "@/modules/types/buttonType";
import Link from "next/link";

const Button = (props: Button) => {

    return (
        <button className="rounded-full text-medium hover:text-[#2c83fb] text-[#1C3C50] border-[#1C3C50] hover:border-[#2c83fb] border-[1px] mr-2 border-solid px-4 mt-5 sm:mt-0 sm:py-0 py-2">
            <span className="font-semibold">{props.texto ? props.texto : ""}</span>
        </button>
    );
}

export default Button;