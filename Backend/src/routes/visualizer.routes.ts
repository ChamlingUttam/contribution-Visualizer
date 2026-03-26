// import { Router } from "express";

// import { gitHubData } from "../controller/visualizer.controller";

// const router = Router()

import express from 'express'
import { gitHubData } from "../controller/visualizer.controller";

const router = express.Router()

router.get('/:username',gitHubData)

export default router
 
