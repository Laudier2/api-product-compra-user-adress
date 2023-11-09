import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export class ControllerAdressDelete {
  async handle(request: Request, response: Response) {
    const id = request.params.id;

    const idExists = await prisma.adress.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const adress = await prisma.adress.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", adress});
  }
}

export class ControllerAdressDeleteRelation {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const idExists = await prisma.relationsAdress.findUnique({
      where: {
        id: id
      }
    })

    if(!idExists){
      return response.status(400).json({
        msg: `Esse id: ${id} não existe mais no database`
      })
    }  

    const adress = await prisma.relationsAdress.delete({     
        where: {
          id: id
        }
      })

    return response.json({msg: "Usuario deletado com sucesso!", adress});
  }
}
