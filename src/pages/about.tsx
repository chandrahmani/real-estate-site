import { SubHeader } from "@/components/common/subHeader/SubHeader";
import Head from "next/head";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>about us real estate website</title>
        <meta
          name="description"
          content="Learn more about our company and mission"
        />
      </Head>
      <SubHeader
        title="Properties for Sale"
        subtitle="Back"
        buttonLink="/contact"
      ></SubHeader>
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
