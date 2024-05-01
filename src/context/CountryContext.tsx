import { useState, useEffect, createContext, type ReactNode } from "react";
import { CountryKey } from '../types';

type CountryContextType = {
  country: CountryKey;
  setCountry: React.Dispatch<React.SetStateAction<CountryKey>>;
};

export const CountryContext = createContext<CountryContextType>({
  country: { code: "KE", name: "kenya", flag: "🇰🇪" },
  setCountry: () => {},
});

export const CountryContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [country, setCountry] = useState<CountryKey>(() => {
    const token = localStorage.getItem("country");
    if (token) {
      return JSON.parse(localStorage.getItem("country") as string);
    }
    return localStorage.setItem(
      "country",
      JSON.stringify({ code: "KE", name: "kenya", flag: "🇰🇪" })
    );
  });

  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(country));
  }, [country]);

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
};
