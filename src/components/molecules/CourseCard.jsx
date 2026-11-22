import { Play, Star } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/card";

function CourseCard({ course = [], onPreviewCourse }) {
  const totalLessons = course?.curriculum?.totalLessons;
  const totalDuration = course?.curriculum?.totalDuration;

  return (
    <Card
      aria-label={`Lihat silabus ${course.title}`}
      onClick={(e) => {
        e.stopPropagation();
        onPreviewCourse?.(course);
      }}
      className="group pt-0 flex flex-col border cursor-pointer shadow-md hover:border-primary hover:shadow-lg gap-3"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <img
          src={course.image}
          alt={course.alt || course.title}
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/35" />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex bg-primary text-primary-foreground items-center justify-center size-12 pointer-events-auto rounded-full shadow-lg ring-4 ring-white/24 translate-y-4 opacity-0 transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105 group-active:scale-95">
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          </span>
        </div>
      </div>

      <CardHeader className="flex-1">
        <CardTitle className="text-lg font-black tracking-wide">
          <h3>{course.title}</h3>
        </CardTitle>
        <CardDescription className="text-foreground-muted">
          <p>{course.description}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        {(totalLessons != null || totalDuration) && (
          <div className="flex w-full items-center gap-2 text-xs text-foreground-muted">
            {totalLessons != null && <span>{totalLessons} lessons</span>}
            {totalLessons != null && totalDuration && (
              <span aria-hidden="true">•</span>
            )}
            {totalDuration && <span>{totalDuration}</span>}
          </div>
        )}
        <Star
          aria-hidden="true"
          className="size-4 text-amber-500 fill-amber-500"
        />
        <span className="font-medium">{course.rating}</span>
        {course.reviewCount != null && (
          <span className="ml-1 text-foreground-muted">
            ({course.reviewCount})
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

export default CourseCard;
