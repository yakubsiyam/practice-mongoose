import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

// databae connection
async function bootstrap() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database connection sucessful`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch {
    console.log(`Failed to connect database`);
  }
}

bootstrap();
