import AttractiveEntity from "@/entities/attractiveEntity.js"
import AttractiveRepository from "@/repositories/attractiveRepository.js"
import AttractiveService from "@/services/attractiveService.js"
import { Request, Response } from "express"

export default class AttractiveController {
  constructor(private repository: AttractiveRepository) {}

  async createAttractive(req: Request, res: Response) {
    const Attractive = <AttractiveEntity>req.body
    const newAttractiveService = new AttractiveService(this.repository)
    await newAttractiveService.createAttractive(Attractive)
    return res.sendStatus(201)
  }

  async listAttractive(req: Request, res: Response) {
    const newAttractiveService = new AttractiveService(this.repository)
    const listAttractive = await newAttractiveService.listAttractive()
    return res.send(listAttractive)
  }
}
