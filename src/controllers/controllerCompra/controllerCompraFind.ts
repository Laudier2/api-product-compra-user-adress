import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ControllerCompraFind {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const user = await prisma.compra.findMany({
      where: {
        id
      },
      include: {
        comprarealations: {
          include: {
            product: true
          }

        }
      }
    })

    return response.status(200).json(user)

  }
}
