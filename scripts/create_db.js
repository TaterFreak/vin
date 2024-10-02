db = db.getSiblingDB('nitro');
db.createCollection('wines');
db.wines.insertMany([
  {
    id: 1,
    slug: 'white_wine',
    localizedNames: {
      fr: 'Vin blanc',
      en: 'White wine'
    },
  },
  {
    id: 2,
    slug: 'red_wine',
    localizedNames: {
      fr: 'Vin rouge',
      en: 'Red wine'
    },
  }
]);

db.createCollection('foods');
db.foods.insertOne({
  id: 1,
  slug: 'cheese',
  localizedNames: {
    fr: 'Fromage',
    en: 'Cheese'
  },
  pairings: [
    1,
    2
  ]
});
print('Database created successfully.');
