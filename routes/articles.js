const express = require("express");
const Article = require("../models/article");
const router = express.Router();

router.get("/new", (req, res) => {
  res.render("articles/new");
});
router.post("/", async (req, res) => {
  const { title, description, markdown } = req.body;
  const article = new Article({
    title,
    description,
    markdown,
  });
  await article.save();
});

module.exports = router;
