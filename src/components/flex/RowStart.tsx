import { Prop } from "@/modules/types/propType";

const RowStart = (props: Prop) => {
    return (
        <div className={`${props.classes ? props.classes + ' ' : '' }flex flex-row flex-wrap justify-start`}>
            {props.children}
        </div>
    )
}

export default RowStart;