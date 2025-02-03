import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { PropertiesType } from "@/utils/types";

const PropertyDetails = () => {
  const [property, setPropertie] = useState<PropertiesType | null>(null);
  const { query } = useRouter();

  const fetchData = async () => {
    if (!query.pageName) return;

    try {
      const { data } = await axios.get("/api/properties");

      const selectedName = data.find(
        (item: PropertiesType) => item.pageName === query.pageName
      );

      setPropertie(selectedName || null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query.pageName) fetchData();
  }, [query.pageName]);

  // const handleCall = () => {
  //   window.open(
  //     `https://wa.me/+8709517725?text=Hi I'm%20interested%20in%20-Chand_Rahmani.`,
  //     "_blank"
  //   );
  // };
  if (!property) {
    return <h1>Propertys Is Not available</h1>;
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {property?.location}
            </h2>
            <p className="mt-4 text-gray-500">{property?.description}.</p>

            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              <div key={property?.id} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">
                  {property?.pageName}
                </dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {property.description}
                </dd>
                <div className="mt-4 flex space-x-4 text-gray-700">
                  <span>🛏 {property?.bedrooms} Beds</span>
                  <span>🛁 {property?.bathrooms} Baths</span>
                  <span>📏 {property?.area} sqft</span>
                </div>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={property?.images[0]?.src}
              className="h-full w-full object-cover object-center"
            />
            <img
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              src={property?.images[1]?.src}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Side of walnut card tray with card groove and recessed card area."
              src={property?.images[2]?.src}
              className="rounded-lg bg-gray-100"
            />
            <img
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              src={property?.images[3]?.src}
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PropertyDetails;
