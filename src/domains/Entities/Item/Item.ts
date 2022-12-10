import {it} from "node:test";

export abstract class Item {
    public name: string;
    public sellIn: number;
    public quality: number;
    public basePrice: number;

    constructor(name: string, sellIn: number, quality: number, basePrice: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.basePrice = basePrice;
    }

    public toString(): string {
        return `${this.name}, ${this.sellIn}, ${this.quality}, ${this.basePrice}`;
    }

    public update(item: Item): void {
        this.name = item.name;
        this.quality = item.quality;
        this.sellIn = item.sellIn;
        this.basePrice = item.basePrice;
    }

    public getValue(): number {
        return this.basePrice * this.quality;
    }
}

export class GenericItem extends Item {
    public update(): void {
    }
}

export class AgingItem extends Item {
    public update(): void {
    }
}

export class EventItem extends Item {
    public update(): void {
    }
}

export class LegendaryItem extends Item {
    public update(): void {
    }
}

export class ConjuredItem extends Item {
    public update(): void {
    }
}