import { Prop } from "@/modules/types/propType";

const ColumnCenter = (props: Prop) => {

    return (
        <div className={`${props.classes ? props.classes + ' ' : '' }flex justify-center place-items-center flex-col`}>
            {props.children}
        </div>
    )

}

export default ColumnCenter;