import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

const prisma = new PrismaClient()

export class ControllerAdressUpdate {
  async handle(request: Request, response: Response) {
    const { 
      id, 
      name, 
      email, 
      password, 
      phone, 
      image
    } = request.body;

    const cryptPass = await bcrypt.hash(password, 8)

    const userExists = await prisma.user.findFirst({
      where: {
        id: id,
        email: email
      }
    })
    
    if(!userExists){
      return response.status(400).json({
        msg: `Você não pode autera o email: ${email}! Somente os outros dados.`
      })
    } 

    if(typeof id === "undefined"){
      return response.status(400).json({
        msg: `O id: ${id === undefined ? "Você não inserio nem um id!" : id} não existe, ou não esta vinculado a nem um usuário, tente outro!`
      })
    } 

   
    if(
      typeof phone === 'number' || 
      typeof password === 'number' ||
      typeof name === 'number' || 
      typeof email === 'number' ||
      typeof image === 'number'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando ou estão em números! Lembre-se que, todos os campos tem que estar em string ok!`
      })
    }  

    if(
        typeof phone === 'undefined' ||
        typeof password === 'undefined' ||
        typeof name === 'undefined' || 
        typeof email === 'undefined' ||
        typeof image === 'undefined'
    ){
      return response.status(500).json({
        msg: `Algum campo esta faltando! E lembre-se que todos os campos tem que ser string ok!`
      })
    }   

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        email,
        name,
        phone,
        image,
        password: cryptPass
      }
    })
    
    return response.status(201).json(user)
  }
}

export class ControllerAdressUpdateAdress {
  
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