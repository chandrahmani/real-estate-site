import { SubHeader } from "@/components/common/subHeader/SubHeader";
import Head from "next/head";
import { useRouter } from "next/router";

const About = () => {
  const { push } = useRouter();
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>About Us Real Estate Website</title>
        <meta
          name="description"
          content="Learn more about our company and mission"
        />
      </Head>
      <SubHeader
        title="Properties for Sale"
        children={
          <div>
            <button
              onClick={() => push("/")}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Back Page
            </button>
          </div>
        }
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 mb-4">
            Welcome to our Real Estate website! Our mission is to help you find
            your dream home or perfect investment property With years of
            experience in the industry we are committed to providing excellent
            service and guidance every step of the way
          </p>
          <p className="text-gray-700 mb-4">
            Our team of dedicated professionals works tirelessly to bring you
            the best listings and market insights Whether youre buying selling
            or renting we strive to make the process as seamless and enjoyable
            as possible
          </p>
          <p className="text-gray-700">
            Thank you for choosing us as your trusted real estate partner We
            look forward to helping you achieve your real estate goals
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
