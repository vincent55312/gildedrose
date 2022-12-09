import {Shop} from "../../domains/UseCases/Shop";
import {generateRandomItems} from "../../domains/Entities/Item/seeder/itemSeeder";

// Ajouter des éléments à la liste des produits dans la classe Shop
const items = generateRandomItems(10);

// Créer une nouvelle instance de la classe Shop
let shop = new Shop(items);

// Appeler la méthode updateQuality pour mettre à jour la qualité des produits
shop.updateQuality();