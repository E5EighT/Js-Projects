import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
   const posts = await fetch("https://jsonplaceholder.typicode.com/posts")
   const data = await posts.json()
   res.render("index", {title: "Home Page", data})
})
  
router.get("/about", (req, res) =>
  res.render("about", { title: "About Page" })
);

router.get("/contact", (req, res) =>
  res.render("contact", { title: "Contact Page" })
);

router.post("/search-post", async (req,res) => {
  const postId = req.body.postId
  console.log(postId)
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts/" + parseInt(postId))
  const data = await posts.json()
  res.render("result", {title: "Result Page", data})
})

export default router;
