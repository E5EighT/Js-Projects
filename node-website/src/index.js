import express from "express"
import morgan from "morgan"
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from "./routes/index.routes.js"

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url));


app.set("views", join(__dirname,  "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"))
app.use(indexRoutes)
app.use('/public', express.static(join(__dirname, 'public')))

app.listen(3000)

console.log("Server on port 3000")