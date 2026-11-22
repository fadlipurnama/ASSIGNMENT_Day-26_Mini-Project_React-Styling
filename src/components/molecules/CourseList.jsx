import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { cn } from "cn";
import { Star } from "lucide-react";

function CourseList({ courses, className = "" }) {
  return (
    <div className={cn("grid md:grid-cols-2 lg:grid-cols-4 gap-4", className)}>
      {courses.map((course) => {
        const totalLessons = course.curriculum?.totalLessons;
        const totalDuration = course.curriculum?.totalDuration;
        return (
          <Card
            key={course.id}
            className="flex flex-col border cursor-pointer shadow-md hover:border-primary hover:shadow-lg gap-3"
          >
            <img
              src={course.image}
              alt={course.title}
              className="aspect-video object-cover"
            />
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
      })}
    </div>
  );
}

export default CourseList;
