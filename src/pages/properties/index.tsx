import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { PropertiesType } from "@/utils/types";
import { SubHeader } from "@/components/common/subHeader/SubHeader";
import Head from "next/head";

const Properties = () => {
  const [properties, setProperties] = useState<PropertiesType[]>([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/properties");
      console.log("ds", data);
      setProperties(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Properties</title>
        <meta name="description" content="Browse real estate" />
      </Head>
      <SubHeader
        title="Available Properties"
        subtitle="Back"
        buttonLink="/"
      ></SubHeader>
      <main className="container mx-auto px-4 py-6 ">
        <div className="space-y-4">
          {properties.map((property) => (
            <div key={property.id} className="p-4 bg-white shadow rounded">
              <h3 className="text-lg font-bold">{property.pageName}</h3>
              <p>Location: {property.location}</p>
              <p>Price: {property.price}</p>

              <Link href={`/properties/${property.pageName}`}>
                <span className="text-blue-500 underline ">View Details</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Properties;
