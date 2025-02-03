

export type  PropertiesType = {
  id: number;
  pageName:string;
  location: string;
  price: number; 
  bedrooms?: number;
  bathrooms?: number;
  avatar:string;
  area?: number;
  images: { src: string }[];
  description: string;

}

export type SubHeaderType  ={
    title:string;
    subtitle:string;
    buttonLink:string
}


export type SubLoaderType  ={
    loading: boolean
}
