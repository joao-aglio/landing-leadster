import { Prop } from "@/modules/types/propType";

const Section = (props: Prop) => {

    return (
        <section className={`${props.classes ? props.classes + ' ' : '' }`}>
            {props.children}
        </section>
    )

}

export default Section;