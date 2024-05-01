import { CarousselProps } from "../../types";
import { ImLinkedin } from "react-icons/im";
import { useRef, useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

type CarousselDataProps = {
  CarousselData: CarousselProps[];
};

const Caroussel = ({ CarousselData }: CarousselDataProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (!carouselRef.current) return;
    else {
      setIsAtStart(carouselRef.current.scrollLeft === 0);
      setIsAtEnd(
        carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
          carouselRef.current.scrollWidth
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -384, behavior: "smooth" }); // adjust scroll amount as needed
      checkScrollPosition();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 384, behavior: "smooth" }); // adjust scroll amount as needed
      checkScrollPosition();
    }
  };
  return (
    <section className="relative pt-4 sm:pt-16 pb-10 mx-auto w-full max-w-screen-2xl px-5 lg:pl-14">
      {!isAtStart && (
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 sm:left-9 transform -translate-y-1/2 z-40 bg-neutral-red rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          <FaChevronLeft />
        </button>
      )}

      <div
        ref={carouselRef}
        onScroll={checkScrollPosition}
        className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto scrollbar-hide"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {CarousselData.map(({ name, title, image, link }: CarousselProps) => (
          <div
            key={crypto.randomUUID()}
            className="relative after:block after:relative after:-mt-36 after:h-36 after:w-full after:content-[''] after:z-0 after:rounded-b-2xl after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_29.17%,_rgba(0,0,0,0.94)_97.92%)]"
          >
            <img
              className="rounded-2xl w-[300px] h-[300px] object-cover items-center"
              src={image}
              alt={name}
            />
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              style={{ position: "absolute", top: "10px", right: "10px" }}
              className="hover:bg-white bg-[#0073b1] hover:text-[#0073b1] text-white font-bold rounded "
            >
              <ImLinkedin className="text-2xl " />
            </a>
            <div className="absolute -translate-x-2/4 -translate-y-1/4 left-2/4 top-3/4 text-white text-center z-10 font-medium w-4/5">
              <p className="pb-2 text-xl">{name}</p>
              <p className="text-base font-light">{title}</p>
            </div>
          </div>
        ))}
      </div>

      {!isAtEnd && (
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 sm:-right-0 transform -translate-y-1/2 z-40 bg-neutral-red rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};

export default Caroussel;
