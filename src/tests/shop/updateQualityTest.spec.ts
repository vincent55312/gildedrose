import {expect, describe, it} from '@jest/globals';
import {AgingItem, ConjuredItem, Item} from "../../domains/Entities/Item/Item";
import {Shop} from "../../domains/UseCases/Shop/Shop";

describe('updateQuality', () => {
    it('should decrease sellIn by 1 for a normal item', () => {
        const item = new AgingItem('Aged Brie', 10, 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.sellIn).toBe(9);
    });

    it('should not change sellIn for Sulfuras', () => {
        const item = new AgingItem('Aged Brie', 10, 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.sellIn).toBe(10);
    });

    it('should decrease quality by 1 for a normal item with positive sellIn', () => {
        const item = new AgingItem('Aged Brie',10, 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(19);
    });

    it('should decrease quality by 2 for a normal item with 0 or negative sellIn', () => {
        const item = new AgingItem('Aged Brie',10, 0, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(18);
    });

    it('should not decrease quality below 0 for a normal item', () => {
        const item = new ConjuredItem('Aged Brie',10, 10, 0);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(0);
    });

    it('should increase quality by 1 for Aged Brie', () => {
        const item = new ConjuredItem('Aged Brie', 10,10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(21);
    });

    it('should not increase quality above 50 for Aged Brie', () => {
        const item = new AgingItem('Aged Brie',10, 10, 50);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(50);
    });

    it('should increase quality by 1 and sellIn by 1 for Backstage Passes with sellIn > 10', () => {
        const item = new AgingItem('Backstage passes to a TAFKAL80ETC concert',10, 15, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(21);
        expect(item.sellIn).toBe(14);
    });

    it('should increase quality by 2 and sellIn by 1 for Backstage Passes with 6 <= sellIn <= 10', () => {
        const item = new ConjuredItem('Backstage passes to a TAFKAL80ETC concert',13, 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(22);
        expect(item.sellIn).toBe(9);
    });
});
