import RowCenter from "@/components/flex/RowCenter"
import { Page } from "@/modules/types/pageType";
import Link from "next/link";

const Pagination = (props: Page) => {

    return (

        <RowCenter classes="mb-20">
            <p className="font-extrabold mx-2 py-1 text-xl text-[#1C3C50]">Página</p>

            {Array.from(Array(props.quantidade).keys()).map((index) => {
                return <Link href="" className="mx-1 py-1 text-xl font-semibold text-[#1C3C50] hover:rounded hover:text-[#2c83fb] hover:outline-1 hover:outline hover:outline-offset-1 outline-[#2c83fb] px-3">{index + 1}</Link>;
            })}

        </RowCenter>
    )

}

export default Pagination;