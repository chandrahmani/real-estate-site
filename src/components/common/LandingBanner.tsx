import Head from "next/head";
import { useRouter } from "next/router";
import { SubHeader } from "./subHeader/SubHeader";

export const LandingBanner = () => {
  const { push } = useRouter();

  const handleCall = () => {
    window.open(
      `https://wa.me/+8709517725?text=Hi I'm%20interested%20in%20-Chand_Rahmani.`,
      "_blank"
    );
  };
  return (
    <>
      <SubHeader
        title="Chand Rahmani"
        children={
          <div>
            <button
              onClick={handleCall}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Call Me
            </button>
          </div>
        }
      />
      <Head>
        <title></title>
        <meta name="description" content="Browse real estate" />
      </Head>
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-8xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/2 font-semibold text-indigo-600">
            Welcome to our Real Estate
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            Find your dream home today
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px  bg-white "></div>
              <div className="relative flex h-full flex-col overflow-hidden  ">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Properties for sale
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>

                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-3 top-5 bottom-0 overflow-hidden  border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-06/26/full/1561567153-4607.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    push("/buy");
                  }}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View Properties
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px  shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px  bg-white "></div>
              <div className="relative flex h-full flex-col overflow-hidden  ">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Properties for rent
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>

                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-3 top-5 bottom-0 overflow-hidden">
                    <img
                      className="size-full object-cover object-top p-2"
                      src="https://img.squareyards.com/secondaryPortal/IN_638718224337937600-0701250453535353.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    push("/rent");
                  }}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View Properties
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px  shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px  bg-white "></div>
              <div className="relative flex h-full flex-col overflow-hidden  ">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Properties for details
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo.
                  </p>
                </div>

                <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                  <div className="absolute inset-x-3 top-5 bottom-0 overflow-hidden  border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      className="size-full object-cover object-top"
                      src="https://bsmedia.business-standard.com/_media/bs/img/article/2019-06/26/full/1561567153-4607.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    push("/properties");
                  }}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  View Properties
                </button>
              </div>
              <div className="pointer-events-none absolute inset-px  shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
