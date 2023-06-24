import { Prop } from "@/modules/types/propType";

const RowCenter = (props: Prop) => {
    return (
        <div className={`${props.classes ? props.classes + ' ' : '' }flex flex-row flex-wrap justify-center`}>
            {props.children}
        </div>
    )
}

export default RowCenter;