import { Monster } from "../Models/Monster";

export class MonsterDTO {
    id!: number;
    name!: string;
    description!: string;
    strength!: number;
    dexterity!: number;

    static mapFrom(source: Monster):MonsterDTO{
        return <MonsterDTO>{
            id:source.id,
            name:source.name,
            description:source.description,
            strength: source.strength,
            dexterity:source.dexterity
        }
    }
}
