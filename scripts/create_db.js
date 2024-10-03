db = db.getSiblingDB('nitro');
db.createCollection('wines');
db.createCollection('foods');
print('Database created successfully.');
