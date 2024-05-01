import { LandingCardData } from "../../types";

type LandingCardProps = {
  LandingCard: LandingCardData;
};

const LandingCard = ({
  LandingCard: {
    cardTitle,
    cardBody,
    buttonText,
    image,
    link,
    instance,
    toggleWebChat,
  },
}: LandingCardProps) => {
  return (
    <div className="w-96 h-80 rounded-md">
      <div className="h-full relative shadow-2xl overflow-hidden rounded-md group">
        <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_29.17%,_rgba(0,0,0,0.94)_97.92%)] transition-all ease-in-out duration-500 rounded-md">
          <div className="w-full h-full p-5 relative">
            <div className="absolute -bottom-20 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
              <h2 className="text-2xl font-bold text-white mb-0 pb-10">
                {cardTitle}
              </h2>
              <p className="text-lg font-light text-white">{cardBody}</p>
              {cardTitle === "Q&A Assitant" && instance ? (
                <button
                  type="button"
                  onClick={toggleWebChat}
                  className="py-2 px-6 rounded-md border border-neutral-orange mt-4 hover:bg-neutral-red hover:border-neutral-red w-48"
                >
                  {buttonText}
                </button>
              ) : (
                <a
                  href={`${link}`}
                  type="button"
                  className="text-center py-2 px-6 rounded-md border border-neutral-orange mt-4 hover:bg-neutral-red hover:border-neutral-red w-48"
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
        <img
          src={image}
          className="w-full z-0 h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default LandingCard;
