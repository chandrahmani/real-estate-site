import { useEffect, useState } from "react";
import { Loader } from "@/components/core/Loader/Loader";

export const SubLoader = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading && <Loader />}</>;
};
