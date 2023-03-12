import { Choice } from "../Models/Choice";

export class ChoiceDTO  {
    id!: number;
    text!: string;
    condition!: string;
    target!: number;

    static mapFrom(source:Choice):ChoiceDTO{
        return <ChoiceDTO>{
            id: source.id,
            text: source.text,
            condition: source.condition,
            target: source.targetParagraphId
        }
    }

}
