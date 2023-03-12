import { ChoiceDTO } from "./ChoiceDTO";
import { EncounterDTO } from "./EncounterDTO";
import { ItemDTO } from "./ItemDTO";

export class ParagraphDTO{
    id!:number;
    text!:string;
    script!:string;
    encounter!:EncounterDTO;
    choices!:ChoiceDTO;
    loot!: {amount:number,item:ItemDTO}[]; 
}

