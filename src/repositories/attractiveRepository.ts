import AttractiveEntity from "@/entities/attractiveEntity.js"
import InterfaceAttractiveRepository from "./interfaces/InterfaceAttractiveRepository.js"
import { prisma } from "./../config/database.js"
import { PrismaClient, Prisma } from "@prisma/client"
import { DefaultArgs } from "@prisma/client/runtime/library"

export default class AttractiveRepository implements InterfaceAttractiveRepository {
  private prisma = prisma

  constructor(
    prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
  ) {
    this.prisma = prisma
  }

  async createAttractive({ title, content }): Promise<void> {
    await this.prisma.Attractive.create({
      data: { title, content, favoritedBy: 0 },
    })
  }

  async listAttractive(): Promise<AttractiveEntity[]> {
    return await this.prisma.Attractive.findMany()
  }

  atualizaAttractive(
    id: number,
    pet: AttractiveEntity
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.")
  }
  deletaAttractive(
    id: number
  ): Promise<{ success: boolean; message?: string }> | void {
    throw new Error("Method not implemented.")
  }
}