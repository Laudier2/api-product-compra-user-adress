import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

export class ControllerCompraRelations {
  async handle(request: Request, response: Response) {
    const { id_products, id_compra } = request.body;
   
    if(
      typeof id_compra === 'number' || 
      typeof id_products === 'number'
    ){
      return response.status(500).json({
        msg: `Algum campo estar em número! 
        Lembre-se que, todos os campos tem estar em string ok!
        Ou o id esta errado, verifique novamente
        `
      })
    }  

    if(
        typeof id_compra === 'undefined' || 
        typeof id_products === 'undefined' 
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando! Verifique novamente!
        Ou o id esta errado, verifique novamente || olha o que ta recebendo ${id_compra}, ${id_products}`
      })
    } 

    const compraRelations = await prismaClient.compraRealations.create({
      data: {
        id_compra,
        id_products,
      },
    });

    return response.json(compraRelations);
  }
}
