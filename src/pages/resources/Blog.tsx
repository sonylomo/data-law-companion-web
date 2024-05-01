import { useEffect, useState } from "react";
import { sanityClient } from "../../sanityClient.ts";
import BlogCard from "../../components/resources/BlogCard";
import { BlogPostType } from "../../types/";
import BlogHero from "../../components/resources/BlogHero";
// import HeroCard from "../../components/news/HeroCard"

const BlogPost = () => {
  const [allPostsData, setAllPosts] = useState<BlogPostType[] | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post" && "blog" in categories[]->title] | order(_createdAt desc) {
            title,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                }
            },
            body
        }
`
      )
      .then((data: BlogPostType[]) => {
        setAllPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 pb-16 h-auto">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="uppercase text-2xl sm:text-3xl font-semibold">
          Featured Resource
        </h1>
        {allPostsData && (
          <BlogHero HeroCardProps={allPostsData[0]} />
        )}
      </div>

      {/* search */}
      {allPostsData && (
        <h2 className="text-2xl max-w-screen-lg mx-auto pt-4">
          Articles{" "}
          <span className="text-neutral-red">( {allPostsData.length} )</span>
        </h2>
      )}

      <div className="border-t border-[#9DA0AC] w-full mx-auto my-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-4">
        {allPostsData &&
          allPostsData.map((post) => {
            return <BlogCard key={crypto.randomUUID()} BlogCardProps={post} />;
          })}
      </div>
    </div>
  );
};

export default BlogPost;
