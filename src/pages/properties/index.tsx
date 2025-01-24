import { PropertiesType } from "@/utils/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const Properties = () => {
  const [propertie, setPropertie] = useState<PropertiesType[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/properties");
      console.log("ds", data);
      setPropertie(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold">Properties</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold mb-4">Available Properties</h2>
        <ul className="space-y-4">
          {propertie.map((property) => (
            <li key={property.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-lg font-bold">{property.name}</h3>
              <p>Location: {property.location}</p>
              <p>Price: {property.price}</p>
              <Link href={`/properties/${property.id}`}>
                <span className="text-blue-500 underline">View Details</span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Properties;
