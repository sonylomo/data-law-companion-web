import { useRef, useState, useEffect } from "react";
import { FeaturedData } from "../../types";
// import sample from "../../assets/handshake.png";
import { FiExternalLink } from "react-icons/fi";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import dayjs from 'dayjs';

// const date = dayjs('2024-03-29T10:22:00.000Z');
// const formattedDate = date.format('DD-MM-YYYY');



type FeaturedCarousselDataProps = {
  FeaturedCarousselData: FeaturedData[];
};

const FeaturedCaroussel = ({
  FeaturedCarousselData,
}: FeaturedCarousselDataProps) => {
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
      carouselRef.current.scrollBy({ left: -384, behavior: "smooth" });
      checkScrollPosition();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 384, behavior: "smooth" });
      checkScrollPosition();
    }
  };

  return (
    <section className="mx-auto w-full max-w-screen-2xl pl-4 relative">
      {!isAtStart && (
        <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 sm:-left-1 transform -translate-y-1/2 z-40 bg-neutral-red rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          <FaChevronLeft />
        </button>
      )}

      <div
        ref={carouselRef}
        onScroll={checkScrollPosition}
        className="h-96 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-hidden scrollbar-hide z-0"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(250px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {FeaturedCarousselData.map(
          ({ publishedAt, title, source, mainImage, slug }) => (
            <div
              key={crypto.randomUUID()}
              className="scrollbar-hide rounded overflow-y-hidden relative after:block after:relative after:-mt-64 after:h-64 after:w-full after:content-[''] after:z-0 after:rounded-b after:bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.5)_29.17%,_rgba(0,0,0,0.94)_97.92%)]"
            >
              <a
                href={slug ? `/resources/blog/${slug.current}` : source}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:cursor-pointer"
              >
                <img
                  className=" w-96 h-80 object-cover items-center"
                  src={mainImage.asset.url}
                  alt={title}
                />
                <div className="absolute -translate-y-[85%] hover:-translate-y-[110%] inset-x-0 text-white text-left z-10 font-medium w-full p-3 space-y-6 transition-all ease-in-out duration-500">
                  <p className="pb-2 text-sm font-light text-orange-300">
                    {slug ? "Blog" : "News Release"}
                  </p>
                  <p className="text-2xl font-bold text-pale-orange">{title}</p>
                  <p className="text-base text-orange-300">
                    {dayjs(publishedAt).format("DD/MM/YYYY")}
                  </p>
                  <p className="flex items-center gap-2 pt-2 underline text-pale-orange hover:text-orange-300">
                    Read more <FiExternalLink />
                  </p>
                </div>
              </a>
            </div>
          )
        )}
      </div>

      {!isAtEnd && (
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 sm:-right-5 transform -translate-y-1/2 z-40 bg-neutral-red rounded-full w-10 h-10 flex items-center justify-center text-white"
        >
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};

export default FeaturedCaroussel;
