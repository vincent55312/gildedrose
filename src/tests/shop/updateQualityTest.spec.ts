import {expect, describe, it} from '@jest/globals';
import {Shop} from "../../domains/UseCases/Shop";
import {Item} from "../../domains/Entities/Item/Item";

describe('updateQuality', () => {
    it('should decrease sellIn by 1 for a normal item', () => {
        const item = new Item('Normal Item', 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.sellIn).toBe(9);
    });

    it('should not change sellIn for Sulfuras', () => {
        const item = new Item('Sulfuras, Hand of Ragnaros', 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.sellIn).toBe(10);
    });

    it('should decrease quality by 1 for a normal item with positive sellIn', () => {
        const item = new Item('Normal Item', 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(19);
    });

    it('should decrease quality by 2 for a normal item with 0 or negative sellIn', () => {
        const item = new Item('Normal Item', 0, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(18);
    });

    it('should not decrease quality below 0 for a normal item', () => {
        const item = new Item('Normal Item', 10, 0);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(0);
    });

    it('should increase quality by 1 for Aged Brie', () => {
        const item = new Item('Aged Brie', 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(21);
    });

    it('should not increase quality above 50 for Aged Brie', () => {
        const item = new Item('Aged Brie', 10, 50);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(50);
    });

    it('should increase quality by 1 and sellIn by 1 for Backstage Passes with sellIn > 10', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(21);
        expect(item.sellIn).toBe(14);
    });

    it('should increase quality by 2 and sellIn by 1 for Backstage Passes with 6 <= sellIn <= 10', () => {
        const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
        const shop = new Shop([item]);

        shop.updateQuality();

        expect(item.quality).toBe(22);
        expect(item.sellIn).toBe(9);
    });
});
