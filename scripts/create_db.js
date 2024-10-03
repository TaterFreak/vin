db = db.getSiblingDB('nitro');
db.createCollection('wines');
db.createCollection('foods');
db.createCollection('wineTypes');
db.createCollection('wineCountries');
db.createCollection('wineRegions');
db.createCollection('wineAppellations');
print('Database created successfully.');
