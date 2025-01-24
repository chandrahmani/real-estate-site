import Head from "next/head";

const Rent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Rent Properties - Real Estate Website</title>
        <meta
          name="description"
          content="Explore properties available for rent."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold mb-6">Properties for Rent</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img
              src="#"
              alt="Rent Property"
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">Cozy Apartment</h3>
              <p className="text-gray-600">$1,500/month - 2 Beds, 1 Bath</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                View Details
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Rent;
