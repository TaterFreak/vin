const fs = require('fs');
const csv = require('csv-parser');

const wines = [];
const wineCountries = [];
const wineAppellations = [];
const wineTypes = [];
const wineRegions = [];
const foods = [];
let db;

async function readWines() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wines.csv')
      .pipe(csv())
      .on('data', (row) => {
        console.log(row)

        wines.push({
          id: parseInt(row.id),
          name: row.name,
          appelation: parseInt(row.appelation)
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  })
}

async function readCountries() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wineCountries.csv')
      .pipe(csv())
      .on('data', (row) => {
        wineCountries.push({
          id: parseInt(row.id),
          name: row.name,
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  })
}

async function readTypes() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wineTypes.csv')
      .pipe(csv())
      .on('data', (row) => {
        wineTypes.push({
          id: parseInt(row.id),
          slug: row.slug,
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  })
}

async function readRegions() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wineRegions.csv')
      .pipe(csv())
      .on('data', (row) => {
        wineRegions.push({
          id: parseInt(row.id),
          name: row.name,
          country: parseInt(row.country)
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  })
}

async function readAppellations() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wineAppellations.csv')
      .pipe(csv())
      .on('data', (row) => {
        wineAppellations.push({
          id: parseInt(row.id),
          name: row.name,
          region: parseInt(row.region)
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  })
}

async function readFoods() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/foods.csv')
      .pipe(csv())
      .on('data', (row) => {
        const wineTypeIds = row.wineTypeIds.split(',').map(Number);
        const wineAppellationIds = row.wineAppellationIds.split(',').map(Number);
        const wineRegionIds = row.wineRegionIds.split(',').map(Number);
        const wineIds = row.wineIds.split(',').map(Number);
        const categories = row.categories.split(',').map(String);
        foods.push({
          id: parseInt(row.id),
          slug: row.slug,
          categories,
          wineAppellationIds,
          wineRegionIds,
          wineIds,
          wineTypeIds
        });
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve();
      })
      .on('error', (error) => {
        reject(error);
      });
  })
}

readFoods()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.foods.insertMany(foods);
    console.log('Foods imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });

readTypes()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.wineTypes.insertMany(wineTypes);
    console.log('Types imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });

readCountries()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.wineCountries.insertMany(wineCountries);
    console.log('Countries imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });

readRegions()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.wineRegions.insertMany(wineRegions);
    console.log('Regions imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });

readAppellations()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.wineAppellations.insertMany(wineAppellations);
    console.log('Appellations imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });

readWines()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.wines.insertMany(wines);
    console.log('Wines imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });
