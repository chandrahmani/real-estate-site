import { SubHeaderType } from "@/utils/types";
import { useRouter } from "next/navigation";

export const SubHeader = ({ title, subtitle, buttonLink }: SubHeaderType) => {
  const { push } = useRouter();
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800  py-3 shadow-md border-b">
        <div className="flex  justify-between mx-auto max-w-8xl px-2 lg:max-w-8xl lg:px-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <button
            type="button"
            onClick={() => push(buttonLink)}
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg focus:ring-4 focus:ring-blue-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            {subtitle}
          </button>
        </div>
      </div>
    </>
  );
};
