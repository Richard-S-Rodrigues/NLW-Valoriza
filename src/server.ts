import 'reflect-metadata'
import express from 'express'
import morgan from 'morgan'

import { router } from './routes'

import './database'

const app = express()

app.use(express.json())
app.use(morgan('common'))

app.use(router)

const port = 3001
app.listen(port, () => console.log(`Server running on port ${port}`))