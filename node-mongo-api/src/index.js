import express from "express";
import morgan from "morgan";
import "./db.js"
import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";
import { createRoles } from "./libs/setup.js";

const app = express()
createRoles()

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/products", productsRoutes)
app.use("/api/auth", authRoutes)

app.use((req,res) => {
    res.send("mongo-api")
})

app.listen(3000)

console.log("Server on port 3000")