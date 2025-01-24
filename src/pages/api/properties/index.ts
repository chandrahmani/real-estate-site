import { NextApiRequest, NextApiResponse } from "next";
import properties from '../../../data/properties.json'

type Data = {
    id: number;
    name: string;
    location:string;
    price: string
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
){

    
    res.status(200).json(properties)
}