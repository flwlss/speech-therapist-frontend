import type { Review } from "@/types/reviews";

interface IReviewSlide {
  review: Review;
}

const ReviewSlide = ({ review }: IReviewSlide) => {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/10 lg:p-8">
      <span aria-hidden className="font-serif text-6xl leading-none text-sage">
        «
      </span>
      <blockquote className="mt-2 flex-1 text-ink/90">{review.text}</blockquote>
      <figcaption className="mt-6 border-t border-ink/10 pt-4">
        <p className="font-serif text-lg font-semibold leading-tight">
          {review.name}
        </p>
        <p className="text-sm text-muted">{review.date}</p>
      </figcaption>
    </figure>
  );
};

export default ReviewSlide;
