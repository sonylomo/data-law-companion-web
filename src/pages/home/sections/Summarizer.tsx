import { useState, Fragment, useEffect } from "react";
import { Listbox, Transition, Dialog } from "@headlessui/react";
import useCountry from "../../../hooks/useCountry";
import { HiOutlineChevronUpDown } from "react-icons/hi2";
import { BsCheck } from "react-icons/bs";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import useSummary from "../../../hooks/mutation/useSummary";

const topicData = {
  kenya: [
    {
      id: 1,
      description:
        "Establishment of the Office of Data Protection Commissioner",
    },
    {
      id: 2,
      description: "Registration of Data Controllers and Data Processors",
    },
    {
      id: 3,
      description: "Principles and Obligations of Personal Data Protection",
    },
    { id: 4, description: "Processing of Sensitive Personal Data" },
    { id: 5, description: "Transfer of personal data outside Kenya" },
    { id: 6, description: "Exemptions" },
    { id: 7, description: "Enforcement Provisions" },
    { id: 8, description: "Financial Provisions" },
    { id: 9, description: "Offences of Unlawful Disclosure of Personal Data" },
  ],

  rwanda: [
    { id: 1, description: "General Provisions" },
    { id: 2, description: "Processing and Quality of Personal Data" },
    { id: 3, description: "Rights of the Data Subject" },
    { id: 4, description: "Tasks and Powers of the Supervisory Authority" },
    {
      id: 5,
      description: "Registration of a Data Controller and Data Processor",
    },
    {
      id: 6,
      description: "Obligations of the Data Controller and the Data Processor",
    },
    {
      id: 7,
      description: "Sharing, Transfers, Storage and Retention of Personal Data",
    },
    { id: 8, description: "Misconducts, offenses, and sanctions" },
    { id: 9, description: "Miscellaneous, Transitional and Final Provisions" },
  ],
  uganda: [{ id: 1, description: "General Provisions" }],
};

const Summarizer = () => {
  const { country } = useCountry();
  const [defaultCountry, setDefaultCountry] = useState({ ...country });
  const [selectedTopic, setSelectedTopic] = useState({
    id: "",
    description: "---Select Data Protection Topic---",
  });
  const [isOpen, setIsOpen] = useState(false);

  const Country = [
    { code: "KE", name: "kenya", flag: "🇰🇪" },
    { code: "UG", name: "uganda", flag: "🇺🇬" },
    { code: "RW", name: "rwanda", flag: "🇷🇼" },
  ];

  const [Summary, setGeneratedSummary] = useState("");

  const copyToClipboard = () => {
    closeModal();
    const isCopy = copy(Summary);
    console.log("Copy test: ", isCopy);

    if (isCopy) {
      toast.success("Copied to Clipboard");
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const capitalizeFirstLetter = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const { mutate: generateSummary, isPending } =
    useSummary(setGeneratedSummary);

  useEffect(() => {}, [generateSummary]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await generateSummary({
      country: capitalizeFirstLetter(defaultCountry.name),
      section: selectedTopic.id && selectedTopic.id.toString(),
    });
    openModal();
    console.log("response: ", response);
  };

  return (
    <>
      <div
        className="bg-orange-300 h-auto mb-28"
        id="data-law-summarizer"
      >
        <div className="max-w-screen-xl mx-auto px-4 py-16">
          <h2 className="font-bold text-2xl sm:text-4xl text-center my-6 text">
            Data Protection Law Summarizer
          </h2>

          <form
            className="flex sm:flex-row flex-col w-full gap-4 items-center"
            onSubmit={handleSubmit}
          >
            {/* select country */}
            <Listbox
              as="div"
              value={defaultCountry}
              onChange={setDefaultCountry}
              className="w-full sm:w-32 z-10"
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative h-10 w-full cursor-default rounded-lg bg-pale-orange py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-orange focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-orange text-sm">
                  <span className="block truncate">
                    {defaultCountry.flag} {defaultCountry.code}
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
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
                                <BsCheck
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
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

            {/* Select Topic */}
            <Listbox
              as="div"
              value={selectedTopic}
              onChange={setSelectedTopic}
              className="w-full sm:w-full z-[1]"
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-pale-orange py-2 pl-3 text-left shadow-md focus:outline-none focus-visible:border-neutral-orange focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-orange">
                  <span className="block truncate">
                    {selectedTopic.description}
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
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                    {topicData[country.name] ? (
                      topicData[defaultCountry.name].map((topic) => (
                        <Listbox.Option
                          key={crypto.randomUUID()}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 px-4 ${
                              active
                                ? "bg-pale-orange text-neutral-red"
                                : "text-dark-grey"
                            }`
                          }
                          value={topic}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ml-3 ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {topic.description}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl- text-neutral-orange">
                                  <BsCheck
                                    className="h-5 w-5 ml-1"
                                    aria-hidden="true"
                                  />
                                </span>
                              )}
                            </>
                          )}
                        </Listbox.Option>
                      ))
                    ) : (
                      <p>No Topics Available!</p>
                    )}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>

            <button
              type="submit"
              disabled={isPending}
              className="w-40 h-10 uppercase disabled:bg-light-grey rounded-md bg-neutral-red px-4 py-2 text-sm font-medium text-white hover:bg-neutral-red/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 transition-all ease-in duration-150"
            >
              {isPending ? "Loading..." : "Submit"}
            </button>
          </form>

          {/* Summary Display */}

          {!isOpen && Summary && (
            <div className="p-4 my-4 rounded bg-pale-orange text-lg overflow-y-scroll h-36">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-white hover:bg-white hover:border-neutral-red hover:text-neutral-red bg-neutral-red px-3 py-2 font-medium text-white hover:bg-neutral-red/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 transition-all ease-in duration-150"
                onClick={copyToClipboard}
              >
                <MdContentCopy />
              </button>
              <p>{Summary}</p>
            </div>
          )}

          {/* {isError && <p>Oops! Something went wrong, please try again. </p>} */}
        </div>
      </div>

      {/* summary modal */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Your Summary
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-base text-gray-700">
                      {isPending
                        ? "Please wait while we generate your summary..."
                        : Summary}
                    </p>
                  </div>

                  <div className="mt-4 float-right">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-white hover:bg-white hover:border-neutral-red hover:text-neutral-red bg-neutral-red px-3 py-2 font-medium text-white hover:bg-neutral-red/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 transition-all ease-in duration-150"
                      onClick={copyToClipboard}
                    >
                      <MdContentCopy />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Summarizer;
