import AttractiveEntity from "@/entities/attractiveEntity.js"
import AttractiveRepository from "@/repositories/attractiveRepository.js"

export default class AttractiveService {
  constructor(private repository: AttractiveRepository) {
    this.repository = repository
  }

  async createAttractive(Attractive: AttractiveEntity) {
    const { title, content } = <AttractiveEntity>Attractive
    if (!Attractive.title) {
      throw "Error"
    }

    const newAttractive = new AttractiveEntity(title, content)

    await this.repository.createAttractive(newAttractive)
  }

  async listAttractive() {
    return await this.repository.listAttractive()
  }
}