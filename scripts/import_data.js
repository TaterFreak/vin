const fs = require('fs');
const csv = require('csv-parser');

const wines = [];
const wineCountries = [];
const wineAppellations = [];
const wineTypes = [];
const wineRegions = [];
const foods = [];

async function readWines() {
  return new Promise((resolve, reject) => {
    fs.createReadStream('../assets/data/wines.csv')
      .pipe(csv())
      .on('data', (row) => {
        wines.push(row);
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
        wineCountries.push(row);
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
        wineTypes.push(row);
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
        wineRegions.push(row);
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
        wineAppellations.push(row);
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
        foods.push(row);
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
