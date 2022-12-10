import {Item} from "../../Entities/Item/Item";
import {IItemUpdater} from "../UpdateItems/IItemUpdater";
import {ItemUpdater} from "../UpdateItems/ItemUpdater";
export class Shop {
    public items: Item[] = [];

    private itemUpdater: IItemUpdater;

    public constructor(items: Item[]) {
        this.items = items;
        this.itemUpdater = new ItemUpdater();
    }

    public updateQuality(): Item[] {
        for (let i = 0; i < this.items.length; i++) {
            this.itemUpdater.updateSellIn(this.items[i]);
            this.itemUpdater.updateQualityForNormalItem(this.items[i]);
            this.itemUpdater.updateQualityForBackstagePasses(this.items[i]);
            this.itemUpdater.updateQualityForConjuredItem(this.items[i]);
        }

        return this.items;
    }
}