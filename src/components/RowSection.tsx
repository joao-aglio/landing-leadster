import { Prop } from "@/modules/types/propType";

const RowSection = (props: Prop) => {

    return (
        <section className={`${props.classes}`}>
            <div className={`mr-10 ml-10 flex text-center flex-wrap justify-center place-items-center flex-row`}>
                {props.children}
            </div>
        </section>
    )

}

export default RowSection;