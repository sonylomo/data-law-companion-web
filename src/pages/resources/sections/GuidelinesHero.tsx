import ComplianceBanner from "../../../assets/compliance/compliance-banner-5.png";

const GuidelinesHero = () => {
  return (
    <div
      className="h-96 w-full bg-cover py-5 px-10 md:px-20 z-10"
      style={{
        backgroundImage: `url(${ComplianceBanner})`,
      }}
    >
      <div className="mx-auto h-full flex flex-col lg:flex-row max-w-screen-2xl justify-center">
        <div className=" flex flex-col justify-center mr-4 gap-4 w-full lg:w-1/2 px-0 sm:px-8 mt-5 lg:mt-0">
          <h1 className="text-5xl sm:text-6xl font-serif text-center">
            General Guidance Documents
          </h1>

          {/* country flags */}
          <p className="text-4xl tracking-widest text-center"> 🇰🇪🇺🇬🇷🇼</p>
        </div>
      </div>
    </div>
  );
};

export default GuidelinesHero;
