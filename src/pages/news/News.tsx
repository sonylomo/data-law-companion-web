// import HeroCard from "../../components/news/HeroCard";
// import bannerImg from "../../assets/handshake.png";
// import NewsCard from "../../components/news/NewsCard";
// import { NewsData as NewsDataType } from "../../types/index";

// const NewsData: NewsDataType[] = [
//   {
//     mainImage: bannerImg,
//     title: "Got some news for you",
//     id: 1,
//     subheading:
//       "Mollitia repellat culpa deleniti totam consequatur earum officiis",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat culpa deleniti totam consequatur earum officiis et molestias qui optio! Magnam iure eaque ad minus libero molestias illo velit voluptates!",
//   },
//   {
//     mainImage: bannerImg,
//     title: "Got some news for you",
//     id: 2,
//     subheading:
//       "Mollitia repellat culpa deleniti totam consequatur earum officiis",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat culpa deleniti totam consequatur earum officiis et molestias qui optio! Magnam iure eaque ad minus libero molestias illo velit voluptates!",
//   },
//   {
//     mainImage: bannerImg,
//     title: "Got some news for you",
//     id: 3,
//     subheading:
//       "Mollitia repellat culpa deleniti totam consequatur earum officiis",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat culpa deleniti totam consequatur earum officiis et molestias qui optio! Magnam iure eaque ad minus libero molestias illo velit voluptates!",
//   },
//   {
//     mainImage: bannerImg,
//     title: "Got some news for you",
//     id: 3,
//     subheading:
//       "Mollitia repellat culpa deleniti totam consequatur earum officiis",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia repellat culpa deleniti totam consequatur earum officiis et molestias qui optio! Magnam iure eaque ad minus libero molestias illo velit voluptates!",
//   },
// ];

// const News = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4 pt-4 pb-16 h-auto">
//       <div className="max-w-screen-lg mx-auto">
//         <h1 className="uppercase text-2xl sm:text-3xl font-semibold">
//           Latest NEWS
//         </h1>
//         <HeroCard HeroCardProps={NewsData[0]} />
//       </div>

//       {/* search */}
//       {/* <h2 className="text-2xl max-w-screen-lg mx-auto">News Articles</h2> */}

//       <div className="border-t border-[#9DA0AC] w-full mt-10 mx-auto my-14" />

//       <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
//         {NewsData.map((data) => {
//           return <NewsCard key={crypto.randomUUID()} NewsCardProps={data} />;
//         })}
//       </div>
//     </div>
//   );
// };

// export default News;
