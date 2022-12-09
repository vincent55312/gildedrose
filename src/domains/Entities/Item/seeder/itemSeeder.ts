import {Item} from "../Item";

export const ITEM_SEEDS: Item[] = [
    new Item('+5 Dexterity Vest', 10, 20),
    new Item('Aged Brie', 2, 0),
    new Item('Elixir of the Mongoose', 5, 7),
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('Conjured Mana Cake', 3, 6),
];

export function generateRandomItems(number: number): Item[] {
    const items: Item[] = [];

    for (let i = 0; i < number; i++) {
        // Générer un nom aléatoire en utilisant une partie du tableau de graines ci-dessus
        const name = ITEM_SEEDS[Math.floor(Math.random() * ITEM_SEEDS.length)].name;

        // Générer des valeurs aléatoires pour les propriétés sellIn et quality
        const sellIn = Math.floor(Math.random() * 30);
        const quality = Math.floor(Math.random() * 50);

        items.push(new Item(name, sellIn, quality));
    }

    return items;
}