import { SubHeader } from "@/components/common/subHeader/SubHeader";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "/api/contacts",
        { name: "chand", email: "chand@gmail.com", message: "Hello!" },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response, "fr");

      if (!response.data) throw new Error("Something went wrong!");

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>contact us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>

      <SubHeader
        title="Properties for contact"
        subtitle="Back"
        buttonLink="/rent"
      ></SubHeader>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
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
                name="email"
                value={form.email}
                onChange={handleChange}
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
                name="message"
                onChange={handleChange}
                value={form.message}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your message"
                rows={5}
                required
              />
            </div>
            {error && <p className="text-red-500 mb-2">{error}</p>}
            {success && (
              <p className="text-green-500 mb-2">Message sent successfully</p>
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
