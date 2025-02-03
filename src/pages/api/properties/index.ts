import { NextApiRequest, NextApiResponse } from "next";
import properties from '../../../data/properties.json'

type Data = {
    id: number;
    pageName?: string;
    location: string;
    price: number | string; 
    bedrooms?: number;
    bathrooms?: number;
    area?: number;
    images?: { src: string }[];
    description?: string;
}

export default function handler (
    req: NextApiRequest,
    res: NextApiResponse<Data[]>
){

    
    res.status(200).json(properties)
}