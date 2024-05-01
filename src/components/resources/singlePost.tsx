import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { sanityClient } from "../../sanityClient";
import { PortableText } from "@portabletext/react";
import { BlogCardProps } from "../../types/index";
import { components, urlFor } from "./CustomComponents";
import { TbExternalLink } from "react-icons/tb";

export default function OnePost() {
  const [postData, setPostData] = useState<BlogCardProps | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image,
        source,
        subheading
       }`,
        { slug }
      )
      .then((data) => {
        setPostData(data[0]);
        // console.log(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div className="bg-neutral-grey min-h-screen p-12">
      <div className="container shadow-xl mx-auto bg-pale-orange rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4 text-center">
                {postData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="w-10 h-10 rounded-full object-cover"
                  alt={postData.name}
                />
                {!postData.source && (
                  <h4 className="cursive flex items-center pl-2 text-xl text-neutral-orange">
                    {postData.name}
                  </h4>
                )}
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt={postData.title}
            style={{ height: "400px" }}
          />
        </div>

        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          {postData && (
            <PortableText value={postData.body} components={components} />
          )}

          {postData.source && (
            <a
              href={postData.source}
              rel="noopener noreferrer"
              target="_blank"
              className="flex justify-start gap-2 items-center pb-3  text-neutral-orange hover:text-neutral-red hover:underline  hover:cursor-pointer"
            >
              source <TbExternalLink />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
