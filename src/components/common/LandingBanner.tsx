import Head from "next/head";
import { useRouter } from "next/router";

export const LandingBanner = () => {
  const { push } = useRouter();
  return (
    <>
      <Head>
        <title></title>
        <meta name="description" content="Browse real estate" />
      </Head>
      <div className="main-h-screen  bg-gray-100">
        <main className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-6">
            {" "}
            Welcome to our Real Estate Website
          </h1>
          <p className="mb-6">Find your dream home today</p>
          <button
            onClick={() => {
              push("/properties");
            }}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View Properties
          </button>
        </main>
      </div>
    </>
  );
};
