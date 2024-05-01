import { useState, useEffect } from "react";
import FeaturedCaroussel from "../../../components/home/FeaturedCaroussel";
import { sanityClient } from "../../../sanityClient";

const Featured = () => {
  const [featuredData, setFeaturedData] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[
              (_type == "post" || _type == "news") 
              && ("blog" in categories[]->title || "external-news" in categories[]->title)
          ] 
          | order(publishedAt desc) {
              title,
              slug,
              mainImage {
                  asset->{
                      _id,
                      url
                  }
              },
              publishedAt,
              source
          }`
      )
      .then((data) => {
        setFeaturedData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="py-14 mt-28 overflow-hidden bg-neutral-grey">
      <h2 className="font-bold text-2xl sm:text-4xl text-center">Featured</h2>
      <FeaturedCaroussel FeaturedCarousselData={featuredData} />
    </div>
  );
};

export default Featured;
