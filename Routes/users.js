//const { prisma } = require('.prisma/client');
const express = require('express');
const router = express.Router();
const {PrismaClient}=require('@prisma/client')
const prisma= new PrismaClient();

const findusers= async (req,res)=>{
    const users= await prisma.user.findMany();
    if(!users)
    {
        res.status(401)
         res.json({message:"no user"},);
    }
    res.status(201)
     res.json(users);
}

const createUsers=(req,res)=>{
    const {username}=req.body()
    if(!username)
    {
        res.status(400)
        res.send({message:"not correct"});
    }
    const user= prisma.user.create({
    data:username,email,password

    })
    if(!user)
    {
        res.status(401)
         res.json({message:"non existant user"},);
    }
    res.status(201)
     res.json(users);
    
}


router.route("/").get(findusers).post(createUsers)
module.exports=router;
module.exports=findusers;