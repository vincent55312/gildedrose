import {Item} from "../../Entities/Item/Item";

export interface IItemsRepository {
    getInventory(): Item[];
    findItem(type: string, quality: number): Item;
    saveInventory(items: Item[]): void;
}

export class ItemsRepository implements IItemsRepository {
    private items: Item[] = [];

    public constructor(items: Item[] = []) {
        this.items = items;
    }

    public getInventory(): Item[] {
        return this.items;
    }

    public findItem(type: string, quality: number): Item|null {
        return null;
    }

    public saveInventory(items: Item[]): void {
        this.items = items;
    }
}