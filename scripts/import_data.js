const fs = require('fs');
const csv = require('csv-parser');

const wines = [];
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

readWines()
  .then(() => {
    db = db.getSiblingDB('nitro');
    db.wines.insertMany(wines);
    console.log('Wines imported successfully');
  })
  .catch((error) => {
    console.error('Error processing CSV file:', error);
  });
