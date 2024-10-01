db = db.getSiblingDB('nitro');
db.createCollection('foods');
db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: [
    { role: "readWrite", db: "nitro" }
  ]
})
db.foods.insertOne({
  slug: 'goat_cheese',
  localizedNames: {
    fr: 'Fromage de chèvre',
    en: 'Goat cheese'
  },
  pairings: [
    'white_wine'
  ]
})
print('Nitro database created successfully.');
