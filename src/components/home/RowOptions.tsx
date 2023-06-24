import { Prop } from "@/modules/types/propType";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

const RowOptions = (props: Prop) => {

    return (
        <>
            <div className="flex flex-wrap sm:justify-between justify-center my-10 py-10 border-b-2">

                <div className="flex sm:justify-start justify-center flex-wrap">
                    <Button texto="Agências" />
                    <Button texto="Chatbot" />
                    <Button texto="Marketing Digital" />
                    <Button texto="Geração de leads" />
                    <Button texto="Mídia Paga" />
                </div>

                <div>
                    <Select texto="Date de publicação"/>
                </div>

            </div>

        </>
    );

}

export default RowOptions;