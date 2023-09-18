import mongoose from "mongoose";

export const ConnectDb = async () => {
  try {
    mongoose.connect(process.env.DATABASE_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb conected Succesfuly");
    });

    connection.on("error", (err) => {
      console.log("MongoDb connected error", err);
      process.exit();
    });
  } catch (error) {
    console.log("somting wrong to connect DataBase ", error);
  }
};
