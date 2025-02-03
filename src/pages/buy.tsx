import Head from "next/head";
import Properties from "./properties";

const Buy = () => {
  // const [buys, setBuys] = useState<PropertiesType[]>([]);

  // const fetchData = async () => {
  //   try {
  //     const { data } = await axios.get("/api/properties");
  //     console.log(data);
  //     setBuys(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>buy properties</title>
        <meta name="description" content="contact" />
      </Head>

      <main>
        <Properties />
      </main>
    </div>
  );
};

export default Buy;
