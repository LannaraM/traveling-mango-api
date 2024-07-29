import AttractiveEntity from "@/entities/attractiveEntity.js"

export default interface InterfaceAttractiveRepository {
  createAttractive(Attractive: AttractiveEntity): void | Promise<void>
  listAttractive(): Array<AttractiveEntity> | Promise<AttractiveEntity[]>
  atualizaAttractive(
    id: number,
    pet: AttractiveEntity
  ): Promise<{ success: boolean; message?: string }> | void

  deletaAttractive(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void
}
