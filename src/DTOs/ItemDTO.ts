import { Item } from "../Models/Item";

export class ItemDTO {
    id!: number;
    name!: string;
    description!: string;
    isStackable!: boolean;
    isEquiptable!: boolean;
    price!: number;

    static mapFrom(source :Item):ItemDTO{
        return <ItemDTO>{
            id: source.id,
            name: source.name,
            description: source.description,
            isStackable: source.isStackable,
            isEquiptable: source.isEquiptable,
            price: source.price
        }
    }
}
