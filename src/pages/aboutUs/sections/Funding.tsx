import person from "../../../assets/person.jpeg";
import jkuat from "../../../assets/jkuat-logo.png";
import aphrc from "../../../assets/aphrc-logo.jpeg";
import kabarak from "../../../assets/kabarak-logo.jpeg";
import inspire from "../../../assets/inpire-logo.jpeg";
import { ProfileCardProps } from "../../../types";
import ruth from "../../../assets/dlp/ruth-oginga.jpeg";
import butichi from "../../../assets/dlp/boniface-butichi.jpeg"

const FundingCard = ({ image, company, name, link }: ProfileCardProps) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank" className="hover:underline">
      <div className="flex gap-4 items-center">
        <img src={image} alt={name} className="rounded-full w-16" />
        <p className="text-light-grey">
          {name} <br />{" "}
          <span className="font-medium text-dark-grey">{company}</span>
        </p>
      </div>
    </a>
  );
};

const Funding = () => {
  return (
    <div className="space-y-10 md:space-y-16 py-6 sm:py-12">
      <h2 className="font-bold text-2xl sm:text-4xl text-center">
        Funding and Collaborators
      </h2>

      {/* stakeholders */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between my-12 w-2/5 mx-auto">
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 my-12"> */}
        <a
          href="https://www.jkuat.ac.ke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={jkuat}
            alt="jomo kenyatta university of agriculture and technology"
            className="w-16 sm:w-24"
          />
        </a>
        <a href="https://aphrc.org/" rel="noopener noreferrer" target="_blank">
          <img src={aphrc} alt="aphrc" className="w-16 sm:w-28" />
        </a>{" "}
        <a
          href="https://kabarak.ac.ke/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={kabarak} alt="kabarak university" className="w-16 sm:w-24" />
        </a>
        <a
          href="https://aphrc.org/project/inspire-implementation-network-for-sharing-population-information-from-research-entities/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img src={inspire} alt="inspire" className="w-48 sm:w-52" />
        </a>
      </div>
      <div className="border-t border-[#9DA0AC] w-5/6 md:w-2/3 mt-10 mx-auto" />

      {/* Funding and Collaborators */}
      <div className="w-3/5 mx-auto space-y-6 md:space-y-12 pb-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between">
          <FundingCard
            image={ruth}
            company="Kabarak University"
            name="Dr Ruth Oginga"
            link="https://www.linkedin.com/in/ruth-oginga-5a60131a6/"
          />
          <FundingCard image={butichi} company="APHRC" name="Mr Bonface Butichi" link="https://www.linkedin.com/in/bonface-ingumba-27b476247/"/>
          <FundingCard image={person} company="ODPC" name="Mr Boniface Wamai" link="https://www.odpc.go.ke/" />
        </div>
        {/* <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between">
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
          <FundingCard image={person} company="JKUAT" name="Dr Lorem Ipsum" />
        </div> */}
      </div>
    </div>
  );
};

export default Funding;
