import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import * as bcrypt from "bcrypt"

export class ControllerAdress {
  async handle(request: Request, response: Response) {
    const { city, cep, street, state, number, district, apartment_or_house } = request.body;
    
    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof city === 'number'
    ){
      return response.status(501).json({
        msg: `Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        typeof cep === 'undefined' || 
        typeof state === 'undefined' ||
        typeof street === 'undefined' ||
        typeof apartment_or_house === 'undefined' ||
        typeof district === 'undefined' ||
        typeof city === 'undefined' || 
        typeof number === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const adress = await prismaClient.adress.create({
      data: {
          district, 
          apartment_or_house, 
          street, 
          city, 
          cep, 
          number, 
          state
      
      }
    })
    
    return response.status(201).json({ message: 'Adress2 create susserful ', adress})
  }
}
