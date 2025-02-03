
import type { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest,res: NextApiResponse,) {
  if(req.method!== "POST"){
    return res.status(405).json({message: "Method Not Allowed"})
  }


  const {name, email, message} =req.body;

  if(!name || !email || !message) {
    return res.status(400).json({message:"All fields are required"})
  }

  try{
    console.log("Message received:" , {name,email,message})

    return res.status(200).json({message: "Message sent Successfully"})
  }catch(error){
    console.log(error)
    return res.status(200).json({message: "Message sending message"})
  
  }
}
