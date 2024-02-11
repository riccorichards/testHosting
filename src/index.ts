import "reflect-metadata";
import expess from "express";
import dotenv from "dotenv";
import appDataSource from "./postgres";
import cors from "cors";
import api from "./api";
dotenv.config();
const app = expess();
app.use(expess.json());
app.use(
  cors({
    origin: "",
    credentials: true,
  })
);
const port = process.env.PORT;

api(app);

appDataSource
  .initialize()
  .then(() => console.log({ msg: "Data Source is available" }))
  .catch((err) =>
    console.error({ msg: "Error during Data Source initialization", err: err })
  );

app.listen(port, () => {
  console.log(`We are running on the ${port}`);
});
