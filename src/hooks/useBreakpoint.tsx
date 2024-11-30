import { useState, useEffect } from "react";

export const useBreakpoint = () => {
  const getBreakpoint = () => {
    const width = window.innerWidth;

    if (width >= 1536) return "2xl";
    if (width >= 1280) return "xl";
    if (width >= 1024) return "lg";
    if (width >= 768) return "md";
    if (width >= 640) return "sm";

    return "default";
  };

  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
