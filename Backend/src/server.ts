import express from "express"
import "dotenv/config"
import cors from "cors"
import visualizerRoute from "./routes/visualizer.routes"

const app = express()


app.use(express.json())
app.use(cors())
app.use(express.json())

app.use('/api/github',visualizerRoute)

const PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log(`server is running at ${PORT}`)
})