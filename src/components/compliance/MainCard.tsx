import { TiPlus, TiMinus } from "react-icons/ti";
import { useState } from "react";
import { DetailedComplianceIssuesChildren } from "../../types";
import useCountry from "../../hooks/useCountry";
import { CountryKey } from "../../types/index";

type MainCardProps = {
  MainCardProps: DetailedComplianceIssuesChildren;
};

type UseCountryType = {
  country: CountryKey;
};

const MainCard = ({
  MainCardProps: { icon, title, country },
}: MainCardProps) => {
  // const globalCountry = useContext(CountryContext) as CountryKey;
  const {
    country: { name, flag },
  } = useCountry() as UseCountryType;
  const [isExpanded, setIsExpanded] = useState(false);

  const Truncate = (str: string) => {
    return !isExpanded ? str.substring(0, 100) + " ..." : str;
  };

  return (
    <>
      {country[name]?.description && (
        <div
          className="flex flex-col justify-between shadow-lg rounded-xl bg-white py-12 px-6 hover:cursor-pointer hover:border hover:border-neutral-red md:w-80 lg:w-96"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            {icon}
            <h3 className="font-medium text-neutral-red text-xl sm:text-2xl my-4">
              {title}
              <span> {flag}</span>
            </h3>
            <p>{Truncate(country[name]!.description)}</p>
            <div className="flex gap-2 mt-2">
              {country[name]?.tags?.map((tag: string) => {
                return (
                  <p
                    key={crypto.randomUUID()}
                    className="text-light-grey text-xs uppercase font-light bg-pale-orange p-1 rounded"
                  >
                    {tag}
                  </p>
                );
              })}
            </div>
          </div>
          <div>
            <button
              type="button"
              className="flex justify-end items-center mt-4 gap-2 font-bold text-lg hover:underline hover:text-neutral-orange"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <span className="bg-pale-orange rounded-full p-2">
                {isExpanded ? (
                  <TiMinus className="text-xl text-neutral-orange" />
                ) : (
                  <TiPlus className="text-xl text-neutral-orange" />
                )}
              </span>
              {isExpanded ? "Show Less" : "Show More"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MainCard;
