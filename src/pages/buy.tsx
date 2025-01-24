import { PropertiesType } from "@/utils/types";
import axios from "axios";
import Head from "next/head";

import { useEffect, useState } from "react";

const Buy = () => {
  const [buys, setBuys] = useState<PropertiesType[]>([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("/api/properties");
      console.log("ds", data);
      setBuys(data);
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
        <title>Buy Properties</title>
        <meta name="description" content="Browse properties for sale" />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold mb-6">Properties for Sale</h1>
        <div className=" sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-2 gap-5 bg-white p-4 rounded-lg shadow-md">
            {buys.map((buy, index) => (
              <div key={index}>
                <img
                  src={buy.imageUrl}
                  alt="Property"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Luxury Villa</h3>
                  <p className="text-gray-600">$1,200,000 - 5 Beds, 4 Baths</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Buy;
