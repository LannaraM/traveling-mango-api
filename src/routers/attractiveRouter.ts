import { Router } from "express"
import AttractiveController from "../controllers/attractiveController.js"
import AttractiveRepository from "@/repositories/attractiveRepository.js"
import { prisma } from "@/config/database.js"

const AttractiveRouter = Router()
const attractiveRepository = new AttractiveRepository(prisma)
const attractiveController = new AttractiveController(attractiveRepository)

AttractiveRouter.post("/Attractives", (req, res) =>
  attractiveController.createAttractive(req, res)
)

AttractiveRouter.get("/Attractives", (req, res) =>
  Attractive.listAttractive(req, res)
)

AttractiveRouter.get("/welcome", (req, res) =>
  res.send("OK")
)


export default AttractiveRouter