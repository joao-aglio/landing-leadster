import { Prop } from "@/modules/types/propType";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

const RowOptions = (props: Prop) => {

    return (
        <>
            <div className="flex flex-wrap justify-center lg:justify-between mb-6 lg:mb-0 gap-1">

                <div className="flex justify-center flex-wrap gap-1">
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