import banner from "../../../assets/dlp/team-row.jpg";
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa6";

const AboutUsHero = () => {
  return (
    <div className="">
      <div
        className="relative h-[30rem] w-full flex items-center justify-center flex-col text-white text-center gap-4 bg-fixed"
        style={{
          // backgroundImage: `linear-gradient(to right, rgba(241, 163, 64, 0.6), rgba(0, 0, 0, 0.8)),url(${banner})`,
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${banner})`,
        }}
      >
        <h1 className="text-5xl sm:text-6xl font-serif">
          The Team and Partners
        </h1>
        <p className="text-xl font-medium uppercase landing-text">
          Your Awareness is Our Priority
        </p>
      </div>
      <div className="absolute inset-x-0 mx-auto -translate-y-20 z-10 rounded-xl shadow-xl w-[95%] md:w-[80%] lg:w-2/3 h-auto sm:h-72 bg-white px-4 py-10 sm:px-10 flex flex-col sm:flex-row gap-10 sm:gap-4">
        <div className="px-2 xl:px-8 items-center text-center">
          <h2 className="flex justify-center items-center gap-4 font-semibold mb-2 text-xl lg:text-2xl text-neutral-orange">
          <FaRegLightbulb className="w-8 h-8 text-neutral-red"/>Raise Awareness
          </h2>
          <p className="text-base sm:text-lg ">
            The primary goal is to enhance understanding of Data Protection Laws
            among East African businesses and individuals, bridging the
            knowledge gap and enabling responsible data management.
          </p>
        </div>
        <div className="px-2 xl:px-8 items-center text-center">
          <h2 className="flex justify-center items-center gap-4 font-semibold mb-2 text-xl lg:text-2xl text-neutral-orange">
          <FaRegHandshake className="w-10 h-10 text-neutral-red"/> Facilitate Compliance
          </h2>
          <p className="text-base sm:text-lg">
            The project aims to equip organizations, businesses, and individuals
            with the necessary knowledge and resources for effective compliance
            with Data Protection Laws, emphasizing ethical and responsible data
            management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHero;
