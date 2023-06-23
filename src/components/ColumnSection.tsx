import { Prop } from "@/modules/types/propType";

const ColumnSection = (props: Prop) => {

    return (
        <section className={`${props.classes}  flex text-center justify-center place-items-center flex-col h-[80vh]	`}>
            {props.children}
        </section>
    )

}

export default ColumnSection;