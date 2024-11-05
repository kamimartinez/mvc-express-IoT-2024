import dotenvFlow from "dotenv-flow";
import express from "express";
import studentRouter from "./routes/student";
import unknownResource from "./middlewares/unknown-resource";
import testRoutes from "./routes/test";
import unknownError from "./middlewares/unknown-error";
import validationError from "./middlewares/validation-error";

if (process.env.NODE_ENV !== "production") {
  dotenvFlow.config();
}

//Para poder acceder a las variables del ambiente(.env)

const app = express();

app.use(express.json());

app.use("/api/v1/student", studentRouter);

app.use("/error", testRoutes);

//Middlewares
app.use(validationError);
app.use(unknownError);

app.use(unknownResource);

app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
