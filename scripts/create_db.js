db = db.getSiblingDB('nitro');
db.createCollection('wines');
db.wines.createIndex({ id: 1 })
db.createCollection('foods');
db.foods.createIndex({ id: 1 })
db.createCollection('wineTypes');
db.wineTypes.createIndex({ id: 1 })
db.createCollection('wineCountries');
db.wineCountries.createIndex({ id: 1 })
db.createCollection('wineRegions');
db.wineRegions.createIndex({ id: 1 })
db.createCollection('wineAppellations')
db.wineAppellations.createIndex({ id: 1 });
db.createCollection('foodCategories');
db.foodCategories.createIndex({ id: 1 })
print('Database created successfully.');
