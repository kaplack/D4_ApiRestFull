const express = require("express");

const routerProduct = require("./router/products.router");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));

app.get("/api/formulario", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.use("/api/productos", routerProduct);

app.listen(8080);
