export const Loader = () => {
  return (
    <>
      <div className="fixed inset-3 flex flex-col items-center justify-center bg-white bg-opacity-50 z-50">
        <div className="w-16 h-16 border-4 border-t-4 border-green-500 border-solid rounded-full animate-spin mb-4"></div>
        <span className="text-black">Loading...</span>
      </div>
    </>
  );
};
