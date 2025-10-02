import mongoose from "mongoose";

const db_link = process.env.Data_Base_Connection;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connectDB = async () => {
  if (!db_link) {
    throw new Error("missing DB link");
  }
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(db_link, {
        dbName: "chic_Cloth",
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose.connection;
      })
      .catch((error) => {
        cached.promise = null;
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};
