import express from "express";

const router = express.Router();
//HTTP requests (such as GET, POST, PUT, and DELETE)
router.get("/", (req, res) => {
  res.send("Hello, this is auth  endpoint");
});
router.get("/register", (req, res) => {
  res.send("Hello, this is auth register endpoint");
});

export default router;
