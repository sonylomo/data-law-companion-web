import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition, Menu } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { CgMenu } from "react-icons/cg";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { BsCheck } from "react-icons/bs";
import useCountry from "../hooks/useCountry";
import { TbArrowGuide } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GiBookshelf } from "react-icons/gi";

const CountrySelector = () => {
  const { country, setCountry } = useCountry();
  const [selectedCountry, setSelectedCountry] = useState({ ...country });

  const Country = [
    { code: "KE", name: "kenya", flag: "🇰🇪" },
    { code: "UG", name: "uganda", flag: "🇺🇬" },
    { code: "RW", name: "rwanda", flag: "🇷🇼" },
  ];

  useEffect(() => {
    setCountry(selectedCountry);
  }, [selectedCountry]);

  return (
    <Listbox value={selectedCountry} onChange={setSelectedCountry}>
      <div className="relative mt-1">
        <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-orange focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-orange text-xs">
          <span className="block truncate">
            {country.flag} {country.code}
          </span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiOutlineChevronUpDown
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
            {Country.map((countryData) => (
              <Listbox.Option
                key={crypto.randomUUID()}
                className={({ active }) =>
                  `relative cursor-default select-none py-2 px-4 ${
                    active
                      ? "bg-pale-orange text-neutral-red"
                      : "text-dark-grey"
                  }`
                }
                value={countryData}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate text-xs ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {countryData.flag} {countryData.code}
                    </span>
                    {selected && (
                      <span className="absolute inset-y-0 left-0 flex items-center pl- text-neutral-orange">
                        <BsCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="text-left">
      <Menu
        as="div"
        className="relative inline-block text-left text-dark-grey hover:text-neutral-orange focus:text-neutral-orange "
      >
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center bg-white hover:underline">
            Resources
            <MdOutlineKeyboardArrowDown
              className="ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-40 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 z-40">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-300 text-white" : "text-dark-grey"
                    } group flex w-full items-center rounded-md px-2 py-2 `}
                    onClick={() => navigate("/resources/guidelines")}
                  >
                    <TbArrowGuide className="mr-2 h-5 w-5" />
                    General Guidelines
                  </button>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-300 text-white" : "text-dark-grey"
                    } group flex w-full items-center rounded-md px-2 py-2 `}
                  >
                    {active ? (
                      <DuplicateActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <DuplicateInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Opportunities & Grants
                  </button>
                )}
              </Menu.Item> */}
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-300 text-white" : "text-dark-grey"
                    } group flex w-full items-center rounded-md px-2 py-2 `}
                    onClick={() => navigate("/resources/blog")}
                  >
                    <GiBookshelf className="mr-2 h-5 w-5" aria-hidden="true" />
                    Blog
                  </button>
                )}
              </Menu.Item>
              {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-300 text-white" : "text-dark-grey"
                    } group flex w-full items-center rounded-md px-2 py-2 `}
                  >
                    {active ? (
                      <MoveActiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <MoveInactiveIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    News
                  </button>
                )}
              </Menu.Item> */}
            </div>
            {/* <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-orange-300 text-white" : "text-dark-grey"
                    } group flex w-full items-center rounded-md px-2 py-2 `}
                  >
                    {active ? (
                      <DeleteActiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    ) : (
                      <DeleteInactiveIcon
                        className="mr-2 h-5 w-5 text-violet-400"
                        aria-hidden="true"
                      />
                    )}
                    Ethics
                  </button>
                )}
              </Menu.Item>
            </div> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

const NavBar = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  return (
    <header className="py-5 md:px-10 px-8 flex items-center justify-between md:justify-center md:shadow-none shadow-md relative max-w-[1440px] md:mx-auto">
      {/* logo */}
      <Link to="/" className="">
        <img src={logo} alt="logo" className="md:w-16 w-12" />
      </Link>

      {/* mobile menu */}
      <CgMenu
        className="md:hidden text-4xl order-3 sm:order-1"
        onClick={() => setShowNavlinks(!showNavlinks)}
      />

      {/* mobile navlinks */}
      <nav
        className="flex flex-col items-start justify-start gap-6 text-base absolute top-[90px] left-0 bg-neutral-grey border-b w-full h-fit z-[1] p-5 pl-12"
        style={
          showNavlinks
            ? { display: "flex", height: "calc(100vh - 90px)" }
            : { display: "none" }
        }
      >
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/"
          onClick={() => setShowNavlinks(false)}
        >
          ✨ Data Law Companion
        </Link>

        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/compliance-issues"
          onClick={() => setShowNavlinks(false)}
        >
          Compliance Issues
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/case-studies"
        >
          Case Studies
        </Link>
        {/* <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/news"
        >
          Blog
        </Link> */}
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/about-us"
          onClick={() => setShowNavlinks(false)}
        >
          About Us
        </Link>
        <div className="">
          <Resources />
        </div>
      </nav>

      {/* Desktop navlinks */}
      <nav className="md:flex hidden items-center gap-10 text-base ml-10">
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline focus:text-neutral-orange focus:underline transition-all duration-300 cursor-pointer"
          to="/"
        >
          ✨ Data Law Companion
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/compliance-issues"
        >
          Compliance Issues
        </Link>
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/case-studies"
        >
          Case Studies
        </Link>
        {/* <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/news"
        >
          Blog
        </Link> */}
        <Link
          className="text-dark-grey hover:text-neutral-orange hover:underline transition-all duration-300 cursor-pointer focus:text-neutral-orange focus:underline"
          to="/about-us"
        >
          About Us
        </Link>

        <div className="">
          <Resources />
        </div>
      </nav>

      {/* Country Selector */}
      <div className="ml-10 w-20">
        <CountrySelector />
      </div>
    </header>
  );
};

export default NavBar;
