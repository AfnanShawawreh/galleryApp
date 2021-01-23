import express from "express";
import bodyParser from "body-Parser";
import mongoose from "mongoose";
import cors from "cors";
import photosRoutes from "./routes/photos.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use("/photos", photosRoutes);
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Afnan:Afnan1234@cluster0.uissk.mongodb.net/<dbname>?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
