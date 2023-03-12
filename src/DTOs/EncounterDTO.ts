import { ItemDTO } from "./ItemDTO";
import { MonsterDTO } from "./MonsterDTO";


export class EncounterDTO {
    id!: number;
    script!: string;
    monsters!: MonsterDTO[];
    loot!: { amount: number; item: ItemDTO; }[];
}
