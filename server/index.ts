import {Nitro} from "nitropack";
import mongoose, { mongo } from "mongoose";
export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
    console.log('CONNECTED TO MONGODB');
  } catch (e) {
    console.log(e)
  }
}
