export class Item {
    public name: string;
    public sellIn: number;
    public quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }

    // Ajouter une méthode toString à la classe Item
    public toString(): string {
        return `${this.name}, ${this.sellIn}, ${this.quality}`;
    }
}