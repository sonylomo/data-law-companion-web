import { Disclosure } from "@headlessui/react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { FAQData } from "../../../components/home/FAQData";

const FAQ = () => {
  return (
    <div className="mt-0 sm:mt-6 pb-16 " id="faq">
      <h2 className="font-bold text-2xl sm:text-4xl text-center pt-10">FAQ</h2>

      <div className="w-full px-4 pt-8">
        <div className="mx-auto w-full max-w-6xl">
          {FAQData.map(({ question, answer }, idx) => {
            return (
              <Disclosure key={crypto.randomUUID()}>
                {({ open }) => (
                  <>
                    <div className="my-1 py-1">
                      <Disclosure.Button className="flex w-full h-full justify-between items-center text-sm sm:text-base rounded-lg bg-orange-300 px-4 py-2 text-left font-medium text-black hover:bg-orange-200 focus:outline-none focus-visible:ring focus-visible:ring-neutral-red/75">
                        <p>
                          <span className="font-light">
                            {idx.toString().length === 1
                              ? `0${idx + 1}`
                              : idx + 1}
                          </span>
                          . {question}
                        </p>
                        <span>
                          {open ? (
                            <BiMinus className="h-5 w-5 text-neutral-red" />
                          ) : (
                            <BsPlusLg className="h-5 w-5 text-neutral-red" />
                          )}
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pb-2 pt-4 bg-pale-orange text-light-grey">
                        {answer}
                      </Disclosure.Panel>
                    </div>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
