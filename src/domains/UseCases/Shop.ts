import {Item} from "../Entities/Item/Item";

export class Shop {
    public items: Item[] = [];

    public constructor(items: Item[]) {
        this.items = items;
    }

    public updateQuality(): Item[] {
        for (let i = 0; i < this.items.length; i++) {
            this.updateSellIn(this.items[i]);
            this.updateQualityForNormalItem(this.items[i]);
            this.updateQualityForBackstagePasses(this.items[i]);
            this.updateQualityForConjuredItem(this.items[i]);
        }

        return this.items;
    }

    // Fonction pour mettre à jour la valeur sellIn d'un produit
    private updateSellIn(item: Item): void {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.sellIn = item.sellIn - 1;
        }
    }

    // Fonction pour mettre à jour la qualité d'un produit normal (non "Aged Brie" ou "Backstage passes")
    private updateQualityForNormalItem(item: Item): void {
        if (item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert") {
            if (item.quality > 0) {
                if (item.name !== "Sulfuras, Hand of Ragnaros") {
                    item.quality = item.quality - 1;
                }
            }
        }
    }

    // Fonction pour mettre à jour la qualité d'un produit "Backstage passes"
    private updateQualityForBackstagePasses(item: Item): void {
        if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
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

    // Fonction pour mettre à jour la qualité d'un produit "Conjured"
    private updateQualityForConjuredItem(item: Item): void {
        if (item.name.includes("Conjured")) {
            if (item.quality > 0) {
                item.quality = item.quality - 2;
            }
        }
    }
}