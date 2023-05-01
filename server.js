const express = require("express");
const mongoose = require("mongoose");
const articlesRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use("/articles", articlesRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test Article",
      createAt: new Date(),
      description: "Test description",
    },
  ];
  res.render("articles/index", { articles });
});

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
