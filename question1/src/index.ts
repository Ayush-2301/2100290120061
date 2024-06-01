import * as dotenv from "dotenv";
import express, { Application } from "express";
import cors from "cors";
import routes from "./routes/products/products";
import bodyParser from "body-parser";
dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Application = express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
