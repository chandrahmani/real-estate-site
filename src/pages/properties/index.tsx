import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { PropertiesType } from "@/utils/types";
import { SubHeader } from "@/components/common/subHeader/SubHeader";
import Head from "next/head";

const Properties = () => {
  const [propertie, setPropertie] = useState<PropertiesType[]>([]);
  const { push } = useRouter();

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
      <Head>
        <title>Properties</title>
        <meta name="description" content="Browse real estate" />
      </Head>
      <SubHeader
        title="Available Properties"
        subtitle="Back"
        buttonLink="/"
      ></SubHeader>
      <main className="container mx-auto px-4 py-6">
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
