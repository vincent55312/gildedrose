import {generateRandomItems} from "../../domains/Entities/Item/seeder/itemSeeder";
import {Shop} from "../../domains/UseCases/Shop/Shop";

const randomItems = generateRandomItems(10);
const shop = new Shop(randomItems);
const updatedItems = shop.updateQuality();
