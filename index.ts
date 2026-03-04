import mongoose from "mongoose";
import app from "./app";

const port: number = 3800;

const startServer = async (): Promise<void> => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");

    console.log("Ya te conectaste wey");

    app.listen(port, (): void => {
      console.log(`Ya estás corriendo el servidor en el puerto ${port} wey`);
    });

  } catch (err: unknown) {
    console.error(err);
  }
};

startServer();
