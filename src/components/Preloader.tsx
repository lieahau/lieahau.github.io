import { useEffect, useState } from "react";
import "./../styles/preloader.css";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  if (!loading) return null; // Hide preloader after loading is complete

  return (
    <div id="preloader">
      <div id="preloader_spinner" className="spinner"></div>
    </div>
  );
};

export default Preloader;
