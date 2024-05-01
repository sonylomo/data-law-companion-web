import KenyaCOA from "../../../assets/countryCOA/kenyaCOA.png";
import UgandaCOA from "../../../assets/countryCOA/ugandaCOA.png";
import RwandaCOA from "../../../assets/countryCOA/rwandaCOA.png";

const CountryData = [
  {
    name: "Kenya",
    image: KenyaCOA,
    link: "https://www.dataguidance.com/notes/kenya-data-protection-overview",
  },
  {
    name: "Uganda",
    image: UgandaCOA,
    link: "https://www.dataguidance.com/notes/uganda-data-protection-overview",
  },
  {
    name: "Rwanda",
    image: RwandaCOA,
    link: "https://www.dataguidance.com/notes/rwanda-data-protection-overview",
  },
];

// const TabbedCountryCard = () => {
  // const [categories] = useState({
  //   Kenya: [
  //     {
  //       id: 1,
  //       title: "Does drinking coffee make you smarter?",
  //       date: "5h ago",
  //       commentCount: 5,
  //       shareCount: 2,
  //       name: "Kenya",
  //       image: KenyaCOA,
  //     },
  //     {
  //       id: 2,
  //       title: "So you've bought coffee... now what?",
  //       date: "2h ago",
  //       commentCount: 3,
  //       shareCount: 2,
  //       name: "Kenya",
  //       image: KenyaCOA,
  //     },
  //   ],
  //   Uganda: [
  //     {
  //       id: 1,
  //       title: "Is tech making coffee better or worse?",
  //       date: "Jan 7",
  //       commentCount: 29,
  //       shareCount: 16,
  //       name: "Uganda",
  //       image: UgandaCOA,
  //     },
  //     {
  //       id: 2,
  //       title: "The most innovative things happening in coffee",
  //       date: "Mar 19",
  //       commentCount: 24,
  //       shareCount: 12,
  //       name: "Uganda",
  //       image: UgandaCOA,
  //     },
  //   ],
  //   Rwanda: [
  //     {
  //       id: 1,
  //       title: "Ask Me Anything: 10 answers to your questions about coffee",
  //       date: "2d ago",
  //       commentCount: 9,
  //       shareCount: 5,
  //       name: "Rwanda",
  //       image: RwandaCOA,
  //     },
  //     {
  //       id: 2,
  //       title: "The worst advice we've ever heard about coffee",
  //       date: "4d ago",
  //       commentCount: 1,
  //       shareCount: 2,
  //       name: "Rwanda",
  //       image: RwandaCOA,
  //     },
  //   ],
  // });
// };

const CountryCard = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center mx-auto items-center mb-10 sm:mb-20 max-w-screen-xl">
      {CountryData.map(({ name, image }) => {
        return (
          // <a href={link} rel="noopener noreferrer" target="_blank">
            <div
              key={crypto.randomUUID()}
              className="flex justify-between items-center gap-8 w-full bg-neutral-grey shadow-lg h-36 p-4 rounded-md hover:text-white hover:bg-neutral-red transition-all duration-500 ease-in-out"
            >
              <img
                src={image}
                alt={`${name} Coat of Arms`}
                className="w-24 h-24"
              />
              <div className="text-left space-y-3">
                <h2 className="text-lg font-semibold">{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          // </a>
        );
      })}
    </div>
  );
};

export default CountryCard;
