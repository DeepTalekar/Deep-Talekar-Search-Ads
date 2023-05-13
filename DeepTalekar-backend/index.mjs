import express from "express";
import "express-async-errors";
import cors from "cors";
import "./loadEnv.mjs"
import search from "./routes/search.mjs"

const app = express()
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());


app.use((err, _req, res, next) => {
  res.status(500).json({ message: "Uh oh 😥! An unexpected error occured 💔", error: err.message });
})

app.use("/search", search);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});