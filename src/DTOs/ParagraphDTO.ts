import { Paragraph } from "../Models/Paragraph";
import { ChoiceDTO } from "./ChoiceDTO";
import { ItemDTO } from "./ItemDTO";

export class ParagraphDTO{
    id!:number;
    text!:string;
    script!:string;
    choices!:ChoiceDTO[];
    loot!: ItemDTO[]; 

    static mapFrom(source: Paragraph):ParagraphDTO{
        return <ParagraphDTO> {
            id: source.id,
            text: source.text,
            script: source.script,
            choices: source.choices.map(c => ChoiceDTO.mapFrom(c))
        };
    }
}

