const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const methodOverride = require("method-override");
const articlesRouter = require("./routes/articles");
const app = express();

mongoose.connect("mongodb://localhost/blog");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.get("/", async (req, res) => {
  const articles = await Article.find({}).sort({ createAt: "desc" });
  res.render("articles/index", { articles });
});

app.use("/articles", articlesRouter);

app.listen(8080, () => {
  console.log("app is listening on port 8080");
});
