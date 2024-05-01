import Caroussel from "../../../components/aboutUs/Caroussel";
import { TeamData } from "../../../components/aboutUs/teamData.ts";

const Team = () => {
  return (
    <div id="team" className="pt-6 sm:pt-12 mt-[25rem] sm:mt-72 bg-neutral-grey">
      <h2 className="font-bold text-2xl sm:text-4xl text-center">
        Meet the Team
      </h2>
      <Caroussel CarousselData={TeamData} />
    </div>
  );
};

export default Team;
