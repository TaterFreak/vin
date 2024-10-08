## Setup
Make sure to install the dependencies:

```bash
npm install

make docker-start-dev
make docker-start-prod
```

```bash
make create-user
make create-db
make import-data


make drop-db
make reset-db
```

MONGODBV_URI=mongodb://admin:admin@mongo:27017/nitro
Use https://www.mongodb.com/fr-fr/products/tools/compass to browse database
Local credentials are admin:admin
