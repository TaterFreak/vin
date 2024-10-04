db = db.getSiblingDB('nitro');
db.createUser({
  user: 'admin',
  pwd: 'admin',
  roles: [
    { role: "readWrite", db: "nitro" }
  ]
});
