import { Prop } from "@/modules/types/propType";

const Grid = (props: Prop) => {

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {props.children}
        </div>
    )
};

export default Grid;