import {Item} from "../../Entities/Item/Item";

export interface IItemUpdater {
    updateSellIn(item: Item): void;
    updateQualityForNormalItem(item: Item): void;
    updateQualityForBackstagePasses(item: Item): void;
    updateQualityForConjuredItem(item: Item): void;
}