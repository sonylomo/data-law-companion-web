import { useState } from "react";
import { Tab } from "@headlessui/react";
import { BsArrowRight } from "react-icons/bs";

// const classNames = (...classes: string[]) => {
//   return classes.filter(Boolean).join(" ");
// };

const GuidelinesBody = () => {
  const [categories] = useState({
    Kenya: [
      {
        id: 1,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note For Digital Credit Providers",
        date: "December 2023",
        link: "/documents/kenya/ODPC-Guidance-Note-for-Digital-Credit-Providers.pdf",
      },
      {
        id: 2,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Communication Sector",
        date: "December 2023",
        link: "/documents/kenya/ODPC-Guidance-Note-for-the-Communication-Sector.pdf",
      },
      {
        id: 3,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "/documents/kenya/ODPC-Guidance-Note-for-the-Education-Sector.pdf",
      },
      {
        id: 4,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note on the Processing of Health Data",
        date: "December 2023",
        link: "/documents/kenya/ODPC-Guidance-Note-on-Processing-of-Health-Data.pdf",
      },
      {
        id: 5,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle:
          "Guidance Note on Registration of Data Controllers and Data Processors",
        date: "December 2023",
        link: "/documents/kenya/ODPC-Guidance-Note-on-Registration-of-Data-Controllers-and-Data-Processors.pdf",
      },
      {
        id: 6,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note on Consent",
        date: "December 2023",
        link: "/documents/kenya/ODPC-Guidance-Notes-on-Consent.pdf",
      },
    ],
    Uganda: [
      {
        id: 1,
        title: "National Information Technology Authority – Uganda",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
      {
        id: 2,
        title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
        subtitle: "Guidance Note for the Education Sector",
        date: "December 2023",
        link: "",
      },
    ],
    // Rwanda: [
    //   {
    //     id: 1,
    //     title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
    //     subtitle: "Guidance Note for the Education Sector",
    //     date: "December 2023",
    //     link: "",
    //   },
    //   {
    //     id: 2,
    //     title: "OFFICE OF THE DATA PROTECTION COMMISSIONER",
    //     subtitle: "Guidance Note for the Education Sector",
    //     date: "December 2023",
    //     link: "",
    //   },
    // ],
  });

  return (
    <div className="-mt-40 w-full px-2 py-16 sm:px-4 mx-auto z-10">
      <Tab.Group>
        {/* <Tab.List className="flex space-x-1 rounded-xl bg-orange-300/30 p-1">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white/60 ring-offset-2 ring-offset-orange-300 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-neutral-orange shadow"
                      : "hover:bg-white/[0.12] text-dark-grey"
                  )
                }
              >
                <span className="text-xl mr-4">
                  {(category === "Kenya" && "🇰🇪") ||
                    (category === "Uganda" && "🇺🇬") ||
                    (category === "Rwanda" && "🇷🇼")}
                </span>
                {category}
              </Tab>
            ))}
          </Tab.List> */}
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((category) => (
            <Tab.Panel
              key={crypto.randomUUID()}
              className="my-6 block max-w-screen-lg mx-auto"
              as="div"
            >
              {/* <ul className="space-y-4"> */}
              {category.map(({ title, subtitle, date, link }) => (
                <div
                  className="bg-white rounded-lg hover:border hover:border-neutral-orange mt-10 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                  key={crypto.randomUUID()}
                >
                  <a
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:cursor-pointer"
                  >
                    {/* <li className="hover:bg-gray-100 "> */}
                    <h5 className="border-b-2 text border-neutral-100 px-6 py-3 text-sm font-medium leading-tight text-neutral-orange uppercase">
                      {title} <span className="text-xl float-right">🇰🇪</span>
                    </h5>
                    <div className="pt-8 pb-12 px-6 h-full">
                      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                        {subtitle}
                      </h5>
                      <p className="mb-4 text-sm text-neutral-600">{date}</p>

                      <button
                        type="button"
                        className="flex float-right gap-3 items-center text-dark-grey hover:text-orange-300 pb-4"
                      >
                        Read More <BsArrowRight />
                      </button>
                    </div>
                    {/* </li> */}
                  </a>
                </div>
              ))}
              {/* </ul> */}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default GuidelinesBody;
