import { Encounter } from "../Models/Encounter";
import { ItemDTO } from "./ItemDTO";
import { MonsterDTO } from "./MonsterDTO";


export class EncounterDTO {
    id!: number;
    script!: string;
    monsters!: MonsterDTO[];
    loot!: ItemDTO[];

    static mapFrom(source :Encounter):EncounterDTO{
        return <EncounterDTO>{
            id:source.id,
            script: source.script,
            monsters: source.monsters.map(m => MonsterDTO.mapFrom(m)),
            loot: source.loot.map(i => ItemDTO.mapFrom(i))
        }
    }
}
