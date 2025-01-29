export const SubHeader = ({ title, subtitle, children }: any) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800  py-4 shadow-md border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {subtitle}
              </p>
            )}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
