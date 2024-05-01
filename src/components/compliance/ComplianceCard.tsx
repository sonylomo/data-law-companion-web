import { ComplianceIssuesData } from "../../types";

type ComplianceCardProps = {
  ComplianceCardProps: ComplianceIssuesData;
};

const ComplianceCard = ({
  ComplianceCardProps: { icon, title, description, id },
}: ComplianceCardProps) => {
  return (
    <a
      href={`#${id}`}
      className={`shadow-lg rounded-xl bg-white py-12 px-6 card-transition hover:cursor-pointer md:w-80 xl:w-96`}
    >
      {icon}
      <h3 className="font-semibold text-neutral-red text-xl sm:text-2xl my-2">
        {title}
      </h3>
      <p className="text-base sm:text-xl font-medium text-light-grey">
        {description}
      </p>
      <div
        className="flex items-center justify-evenly absolute w-8 h-8 overflow-hidden top-0 right-0 rounded-r-[4px] rounded-l-[32px] "
      >
        <div className=" text-white text-bold">→</div>
      </div>
    </a>
  );
};

export default ComplianceCard;
