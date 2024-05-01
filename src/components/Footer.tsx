import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <footer className="bg-neutral-grey text-neutral-orange md:p-12 py-8 px-4">
      <div className="flex md:flex-row flex-col justify-between w-2/3 mx-auto">
        {/* Footer links */}
        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg leading-9">
            DATA PROTECTION ASSISTANT
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="/#data-law-summarizer">Summarization</a>
            </li>
            <li>
              <a href="#">Q&A</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg leading-9">
            DATA PROTECTION ACT
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="/#data-law-overview">DPA-Kenya</a>
            </li>
            <li>
              <a href="/#data-law-overview">DPA-Rwanda</a>
            </li>
            <li>
              <a href="/#data-law-overview">DPA-Uganda</a>
            </li>
            <li>
              <Link to="/compliance-issues">Compliance Issues</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg leading-9">
            ABOUT
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="/about-us#team">Team</a>
            </li>
            <li>
              <a href="/about-us#funding">Funding & Partners</a>
            </li>
            <li>
              <a href="/about-us#stakeholders">Stakeholders</a>
            </li>
            <li>
              <a href="/about-us#terms-of-use">Terms of Use</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:gap-8 gap-0 mt-4 sm:mt-0">
          <h2 className="text-[#9DA0AC] font-normal text-lg  leading-9">
            RESOURCES
          </h2>

          <ul className="flex flex-col gap-2 sm:gap-5 list-none text-sm font-medium">
            <li>
              <a href="/case-studies">Case Studies</a>
            </li>
            <li>
              <a href="/resources/blog">Blog</a>
            </li>
            <li>
              <a href="/resources/blog">News</a>
            </li>
            <li>
              <a href="/#faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#9DA0AC] w-2/3 mt-5 sm:mt-10 mx-auto" />
      <div className="sm:mt-10 mt-5 items-start w-2/3 mx-auto">
        <h1 className="text-center text-neutral-red my-4 md:my-8">
          &copy; {year} Data Protection Assistant | All Rights Reserved
        </h1>
        <div className="flex-3 flex flex-col items-center">
          {/* logo */}
          <img src={logo} alt="logo" className=" md:ml-0 ml-4 object-contain h-16 " />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
