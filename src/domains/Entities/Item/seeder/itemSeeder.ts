import {Item, GenericItem, AgingItem, EventItem, LegendaryItem, ConjuredItem} from "../Item";

export const ITEM_SEEDS: Item[] = [
    new AgingItem('+5 Dexterity Vest',12, 10, 20),
    new GenericItem('Aged Brie', 2,23, 0),
    new LegendaryItem('Sulfuras, Hand of Ragnaros', 23,0, 80),
    new EventItem('Backstage passes to a TAFKAL80ETC concert', 34,15, 20),
    new ConjuredItem('Conjured Mana Cake', 3, 43,6),
];

export function generateRandomItems(number: number): Item[] {
    const items: Item[] = [];

    for (let i = 0; i < number; i++) {
        const item = ITEM_SEEDS[Math.floor(Math.random() * ITEM_SEEDS.length)];
        const sellIn = Math.floor(Math.random() * 30);
        const quality = Math.floor(Math.random() * 50);
        const basePrice = Math.floor(Math.random() * 50);

        item.sellIn = sellIn;
        item.quality = quality;
        item.basePrice = basePrice;
        console.log(item.toString());
        items.push(item);
    }

    return items;
}