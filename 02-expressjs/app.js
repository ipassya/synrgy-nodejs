const express = require("express");
const app = express();
const port = 3000;
// const expressLayouts = require("express-ejs-layouts");

// menggunakan template enginge ejs
app.set("view engine", "ejs");

// third party middleware
// app.use(expressLayouts);

// buil-in middleware
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.render("index", {
//     layout: "layouts/main-layout",
//     title: "Halaman Home",
//   });
// });

// app.get("/detail", (req, res) => {
//   res.render("detail", {
//     layout: "layouts/main-layout",
//     title: "Halaman Detail",
//   });
// });

// app.get("/product", (req, res) => {
//   res.render("product", {
//     layout: "layouts/main-layout",
//     title: "Halaman Product",
//   });
// });

// Routing
const routing = require("./routes/routes");
app.use(routing);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
