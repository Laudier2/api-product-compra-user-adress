import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class ControllerCompraParamesId {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const idExists = await prismaClient.compra.findUnique({
            where: {
              id: id
            }
          })
      
          if(!idExists){
            return response.status(400).json({
              msg: `Esse id: ${id} não existe mais no database ou você esta usando o id errado!`
            })
          }  

        const compra = await prismaClient.user.findUnique({
            where: {
                id: id
            }
        })

        return response.status(200).json(compra)
    }
}