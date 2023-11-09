import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient()

export class ControllerCompraUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id, 
      name,
      email,
      phone,
      district, 
      apartment_or_house, 
      street, 
      city, 
      cep, 
      number, 
      state,
    } = request.body;


    if(typeof id === "undefined"){
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    } 

    if(
      typeof number === 'number' || 
      typeof cep === 'number' || 
      typeof state === 'number' ||
      typeof street === 'number' ||
      typeof apartment_or_house === 'number' ||
      typeof district === 'number' ||
      typeof name === 'number' ||
      typeof email === 'number' ||
      typeof phone === 'number' ||
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
        typeof name === 'undefined' ||
        typeof email === 'undefined' ||
        typeof phone === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando!`
      })
    }   

    const user = await prisma.compra.update({
      where: {
        id: id,
      },
      data: {
        name,
        email,
        phone,
        district, 
        apartment_or_house, 
        street, 
        city, 
        cep, 
        number, 
        state
      }
    })
    
    return response.status(201).json(user)
  }
}

export class ControllerCompraUpdateAdress {
  
  async handle(request: Request, response: Response) {
    const { 
      id,
      district, 
      apartment_or_house, 
      street, 
      city, 
      cep, 
      state,
      number,
      id_user
    } = request.body;

    const adress2 = await prisma.relationsAdress.update({
      where: {
        id: id,
      },
      data: {
        adress2: {
          update: {
            district, 
            apartment_or_house, 
            street, 
            city, 
            cep, 
            number,
            state 
          }
        },
        user: {
          connect: {
            id: id_user
          }
        }
      }      
    })
    
    return response.status(201).json({ message: `${adress2}`})
  }
}