"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
const mongoose_1 = require("mongoose");
const FoodSchema = new mongoose_1.Schema({
    id: Number,
    name: String,
    categories: [Number],
    pairings: [Number],
    wineTypeIds: [Number],
    wineRegionIds: [Number],
    wineAppellationIds: [Number],
    wineIds: [Number]
});
exports.Food = (0, mongoose_1.model)("Food", FoodSchema);
