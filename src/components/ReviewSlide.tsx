import type { Review } from "@/types/reviews";

interface IReviewSlide {
  review: Review;
}

const ReviewSlide = ({ review }: IReviewSlide) => {
  return (
    <div className="space-y-2 lg:px-10">
      <div>
        <p className="text-lg lg:text-xl xl:text-2xl leading-tight">
          {review.name}
        </p>
        <p className="text-xs xl:text-sm">{review.date}</p>
      </div>
      <p className="text-sm font-light lg:text-lg xl:text-xl">{review.text}</p>
    </div>
  );
};

export default ReviewSlide;
