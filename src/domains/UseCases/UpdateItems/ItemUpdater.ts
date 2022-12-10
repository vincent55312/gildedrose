import {IItemUpdater} from "./IItemUpdater";
import {Item} from "../../Entities/Item/Item";

export const AGED_BRIE = "Aged Brie";
export const BACKSTAGE_PASSES = "Backstage passes to a TAFKAL80ETC concert";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export const CONJURED = "Conjured";

export class ItemUpdater implements IItemUpdater {
    public updateSellIn(item: Item): void {
        if (item.name !== SULFURAS) {
            item.sellIn = item.sellIn - 1;
        }
    }
    public updateQualityForNormalItem(item: Item): void {
        if (item.name !== AGED_BRIE && item.name !== BACKSTAGE_PASSES) {
            if (item.quality > 0) {
                if (item.name !== SULFURAS) {
                    item.quality = item.quality - 1;
                }
            }
        }
    }
    public updateQualityForBackstagePasses(item: Item): void {
        if (item.name === BACKSTAGE_PASSES) {
            if (item.quality < 50) {
                item.quality = item.quality + 1;
                if (item.sellIn < 11) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    }
                }
                if (item.sellIn < 6) {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1;
                    }
                }
            }
        }
    }
    updateQualityForConjuredItem(item: Item): void {
        if (item.name.includes(CONJURED)) {
            if (item.quality > 0) {
                item.quality = item.quality - 2;
            }
        }
    }
}