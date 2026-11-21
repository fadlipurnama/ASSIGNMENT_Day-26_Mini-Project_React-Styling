import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { DynamicIcon } from "@/components/atoms/dynamic-icon";
import { cn } from "cn";

function CourseList({ courses, className = "" }) {
  return (
    <div className={cn("grid sm:grid-cols-4 gap-4", className)}>
      {courses.map((course) => (
        <Card
          key={course.id}
          className="border cursor-pointer shadow-md hover:border-primary hover:shadow-lg"
        >
          <CardHeader>
            <CardTitle className="text-base font-semibold">
              {course.title}
            </CardTitle>
            <CardDescription className="text-foreground-muted">
              {course.description}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default CourseList;
