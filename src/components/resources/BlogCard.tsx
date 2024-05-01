import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { BlogPostType } from "../../types/index";

type BlogCardPropsType = {
  BlogCardProps: BlogPostType;
};

const BlogCard = ({ BlogCardProps }: BlogCardPropsType) => {
  return (
    <Link
      to={"/resources/blog/" + BlogCardProps.slug.current}
      key={BlogCardProps.slug.current}
      className="hover:cursor-pointer space-y-3 md:w-80 xl:w-96 hover:shadow-none hover:border hover:border-neutral-red shadow-lg rounded-xl bg-pale-orange"
    >
      <div>
        <img
          src={BlogCardProps.mainImage.asset.url}
          alt={BlogCardProps.title}
          className="w-full h-40 sm:h-56 object-cover border-t rounded-t-xl"
        />
      </div>

      <div className=" px-6">
        <h2 className="font-semibold text-neutral-red text-lg sm:text-xl my-2">
          {BlogCardProps.title}
        </h2>
        <p className="text-base sm:text-base font-medium text-light-grey">
          {BlogCardProps.subheading}
        </p>
      </div>

      <div>
        <p className="flex gap-2 items-center pb-3 px-6 hover:text-neutral-orange hover:underline">
          Read more <FiExternalLink className="text-xl" />
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
