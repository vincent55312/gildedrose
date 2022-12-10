import {Item} from "../../Entities/Item/Item";
import {IItemUpdater} from "../UpdateItems/IItemUpdater";
import {IItemsRepository, ItemsRepository} from "../RepositoryItems/RepositoryItems";
import {ItemUpdater} from "../UpdateItems/ItemUpdater";

export class Shop {
    public items: Item[] = [];

    private itemUpdater: IItemUpdater;
    private itemsRepository: IItemsRepository;

    public constructor(items: Item[] = []) {
        this.items = items;
        this.itemUpdater = new ItemUpdater();
        this.itemsRepository = new ItemsRepository(items);
    }

    public updateQuality(): Item[] {
        for (let i = 0; i < this.items.length; i++) {
            this.itemUpdater.updateSellIn(this.items[i]);
            this.itemUpdater.updateQualityForNormalItem(this.items[i]);
            this.itemUpdater.updateQualityForBackstagePasses(this.items[i]);
            this.itemUpdater.updateQualityForConjuredItem(this.items[i]);
            this.updateValue(this.items[i]);
            this.updateSale(this.items[i]);
            console.log(this.items.toString());
        }

        this.updateInventory();

        return this.items;
    }

    private updateValue(item: Item): void {
        // TODO: implémenter la logique pour mettre à jour la valeur d'un produit
    }

    private updateSale(item: Item): void {
        // TODO: implémenter la logique pour mettre à jour la vente d'un article
    }

    private updateInventory(): void {
        // TODO: implémenter la logique pour mettre à jour l'inventaire
    }

    public sellItem(type: string, quality: number): void {
        // TODO: implémenter la logique pour vendre un produit
    }
}