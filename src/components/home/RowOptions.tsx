import { Prop } from "@/modules/types/propType";
import Button from "../Button";

const RowOptions = (props: Prop) => {

    return (
        <>
            <div className="flex flex-row my-10 py-10 border-b">
                <div className="flex sm:justify-start justify-center flex-wrap">
                    <Button texto="Agências" />
                    <Button texto="Chatbot" />
                    <Button texto="Agências" />
                    <Button texto="Marketing Digital" />
                    <Button texto="Geração de leads" />
                    <Button texto="Mídia Paga" />
                    
                </div>

                <div>

                </div>

            </div>
            <hr className='border'></hr>
        </>
    );

}

export default RowOptions;