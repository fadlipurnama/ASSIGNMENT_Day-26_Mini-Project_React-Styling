import { BookOpen, Clock3, Star } from "lucide-react";
import { Badge } from "@/components/atoms/badge";
import BreadcrumbNav from "@/components/molecules/BreadcrumbNav";

function CourseDetailHero({ course, breadcrumbs = [] }) {
  const totalLessons = course.curriculum?.totalLessons;
  const totalDuration = course.curriculum?.totalDuration;

  return (
    <section className="container flex flex-col gap-6">
      {breadcrumbs.length > 0 && <BreadcrumbNav items={breadcrumbs} />}

      <div className="grid overflow-hidden rounded-2xl border bg-card shadow-sm lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)]">
        <div className="relative min-h-64 overflow-hidden bg-muted lg:min-h-100">
          {course.image ? (
            <img
              src={course.image}
              alt={`Course artwork for ${course.title}`}
              className="absolute inset-0 size-full object-cover aspect-video"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <BookOpen aria-hidden="true" className="size-16 opacity-50" />
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 to-transparent" />
        </div>
        <div className="flex flex-col justify-center gap-5 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-2">
            {course.category_name && (
              <Badge variant="secondary">{course.category_name}</Badge>
            )}
            {course.featured && (
              <Badge className="bg-primary/10 text-primary hover:bg-primary/15">
                Featured course
              </Badge>
            )}
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl leading-tight font-black tracking-tight sm:text-4xl">
              {course.title}
            </h1>
            {course.description && (
              <p className="max-w-2xl text-base leading-7 text-muted-foreground">
                {course.description}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
            {course.rating != null && (
              <div
                aria-label={`${course.rating} out of 5 stars`}
                className="inline-flex items-center gap-1.5"
              >
                <Star
                  aria-hidden="true"
                  className="size-4 fill-amber-500 text-amber-500"
                />
                <span className="font-semibold">{course.rating}</span>
                {course.reviewCount != null && (
                  <span className="text-muted-foreground">
                    ({course.reviewCount.toLocaleString()} reviews)
                  </span>
                )}
              </div>
            )}
            {totalLessons != null && (
              <div className="inline-flex items-center gap-1.5 text-muted-foreground">
                <BookOpen aria-hidden="true" className="size-4" />
                <span>{totalLessons} lessons</span>
              </div>
            )}
            {totalDuration && (
              <div className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Clock3 aria-hidden="true" className="size-4" />
                <span>{totalDuration}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseDetailHero;
