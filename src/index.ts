const Koa = require("koa");
import { a } from "@src/routers/try";

const app = new Koa();

app.listen(8000, () => {
  console.log("The Server is running at http://localhost:8000");
});
