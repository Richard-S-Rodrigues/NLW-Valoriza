import "reflect-metadata"
import "dotenv"
import express from "express"
import "express-async-errors"
import morgan from "morgan"

import { router } from "./routes"
import errorHandler from "./middlewares/errorHandler"

import "./database"

const app = express()

app.use(express.json())
app.use(morgan("common"))

app.use(router)
app.use(errorHandler)

const port = 3001
app.listen(port, () => console.log(`Server running on port ${port}`))