const fs = require('fs');
const csv = require('csv-parser');

const wines = [];
const wineCountries = [];
const wineAppellations = [];
const wineTypes = [];
const wineRegions = [];
const foodCategories = [];
const foods = [];
let db;

async function readWines() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wines.csv')
      .pipe(csv())
      .on('data', (row) => {
        wines.push({
          id: parseInt(row.id),
          name: row.name,
          region: row.region,
          type: row.type,
          winemaker: row.winemaker,
          vintage: row.vintage,
          appellation: row.appellation
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
async function readFoodCategories() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/foodCategories.csv')
      .pipe(csv())
      .on('data', (row) => {
        foodCategories.push({
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

async function readCountries() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wineCountries.csv')
      .pipe(csv())
      .on('data', (row) => {
        wineCountries.push({
          id: parseInt(row.id),
          name: row.name,
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
          slug: row.slug,
          country: row.country
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
          slug: row.slug,
          region: row.region
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
        const wineTypes = row.wineTypes.split(',').map(String);
        const wineAppellations = row.wineAppellations.split(',').map(wine => wine.trim());
        const wineRegions = row.wineRegions.split(',').map(wine => wine.trim());
        const wines = row.wines.split(',').map(wine => wine.trim());
        const categories = row.categories.split(',').map(wine => wine.trim());
        foods.push({
          id: parseInt(row.id),
          slug: row.slug,
          categories,
          wineAppellations,
          wineRegions,
          wines,
          wineTypes
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

readFoodCategories()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.foodCategories.insertMany(foodCategories);
    console.log('Food categories imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });
