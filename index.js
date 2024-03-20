import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const posts = []
app.get("/", (req, res) => {
  res.render("index.ejs", {posts:posts});
});

app.get("/create", (req,res) => {
  res.render("create.ejs")
})

app.post("/submit", (req, res) => {
  var Title = req.body['title'];
  var Body = req.body['body'];
  posts.push({title: Title, body: Body});
  res.redirect(302, "/");
  // res.render("index.ejs", posts);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


