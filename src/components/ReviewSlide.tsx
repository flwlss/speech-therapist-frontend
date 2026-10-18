import type { Review } from "@/types/reviews";

interface IReviewSlide {
  review: Review;
}

// "15.09.2025" -> "2025-09-15" для атрибута datetime
const toIsoDate = (value: string) => {
  const [day, month, year] = value.split(".");
  return `${year}-${month}-${day}`;
};

const ReviewSlide = ({ review }: IReviewSlide) => {
  return (
    <figure className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-ink/10 lg:p-8">
      <span aria-hidden className="font-serif text-6xl leading-none text-sage">
        «
      </span>
      <blockquote className="mt-2 flex-1 text-ink/90">
        <p>{review.text}</p>
      </blockquote>
      <figcaption className="mt-6 border-t border-ink/10 pt-4">
        <cite className="block font-serif text-lg font-semibold not-italic leading-tight">
          {review.name}
        </cite>
        <time
          dateTime={toIsoDate(review.date)}
          className="block text-sm text-muted"
        >
          {review.date}
        </time>
      </figcaption>
    </figure>
  );
};

export default ReviewSlide;
