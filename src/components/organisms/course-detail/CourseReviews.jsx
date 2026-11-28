import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

function CourseReviews({ reviews = [] }) {
  return (
    <section aria-labelledby="reviews-heading">
      <div className="mb-5">
        <h2 id="reviews-heading" className="text-2xl font-bold tracking-tight">
          Learner reviews
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Feedback from learners who have taken this course.
        </p>
      </div>

      {reviews.length === 0 ? (
        <p className="rounded-xl border bg-card p-5 text-sm text-muted-foreground">
          There are no written reviews for this course yet.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {reviews.map((review, index) => (
            <Card key={review.id ?? `${review.user}-${index}`}>
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-semibold">
                      {review.user}
                    </CardTitle>
                    {(review.role || review.date) && (
                      <p className="text-xs text-muted-foreground">
                        {[review.role, review.date].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  {review.rating != null && (
                    <span className="inline-flex items-center gap-1 text-sm font-medium">
                      <Star
                        aria-hidden="true"
                        className="size-4 fill-amber-500 text-amber-500"
                      />
                      {review.rating}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-muted-foreground">
                  “{review.comment}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}

export default CourseReviews;
