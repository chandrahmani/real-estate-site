import { SubHeader } from "@/components/common/subHeader/SubHeader";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>contact us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <SubHeader
        title="Properties for Sale"
        subtitle="Back"
        buttonLink="/rent"
      ></SubHeader>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your message"
                rows={4}
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
