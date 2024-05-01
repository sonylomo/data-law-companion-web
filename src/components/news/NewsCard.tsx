// import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BlogPostType } from "../../types";

type NewsCardPropsType = {
  NewsCardProps: Omit<BlogPostType, "id">;
};

const NewsCard = ({ NewsCardProps }: NewsCardPropsType) => {
  return (
    <Link
      to={"/case-studies/" + NewsCardProps.slug.current}
      key={NewsCardProps.slug.current}
      className="hover:cursor-pointer space-y-3 pb-6 md:w-80 xl:w-96 hover:shadow-none hover:border hover:border-neutral-red shadow-lg rounded-xl bg-pale-orange"
    >
      <div>
        <img
          src={NewsCardProps.mainImage.asset.url}
          alt={NewsCardProps.title}
          className="w-full h-40 sm:h-56 object-cover border-t rounded-t-xl"
        />
      </div>

      <div className=" px-6">
        <h2 className="font-semibold text-neutral-red text-lg sm:text-xl my-2">
          {NewsCardProps.title}
        </h2>
        <p className="text-base sm:text-base font-medium text-light-grey">
          {NewsCardProps.subheading}
        </p>
      </div>
    </Link>
  );
};

export default NewsCard;
