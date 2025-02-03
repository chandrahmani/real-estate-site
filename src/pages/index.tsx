import { LandingBanner } from "@/components/common/LandingBanner";
import { Loader } from "@/components/core/Loader/Loader";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <LandingBanner />
    </>
  );
}
