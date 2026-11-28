import { BookOpen, Clock3, Layers3, PlayCircle } from "lucide-react";
import { Button } from "@/components/atoms/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { formatPrice } from "@/lib/formatPrice";

function CourseSummaryCard({ course }) {
  const sections = course.curriculum?.sections ?? [];
  const previewLessons = sections.reduce(
    (total, section) =>
      total + (section.lessons ?? []).filter((lesson) => lesson.isPreview).length,
    0,
  );
  const facts = [
    {
      icon: Layers3,
      label: "Sections",
      value: course.curriculum?.totalSections ?? sections.length,
    },
    {
      icon: BookOpen,
      label: "Lessons",
      value: course.curriculum?.totalLessons,
    },
    {
      icon: Clock3,
      label: "Duration",
      value: course.curriculum?.totalDuration,
    },
    {
      icon: PlayCircle,
      label: "Preview lessons",
      value: previewLessons,
    },
  ].filter((fact) => fact.value != null);

  return (
    <Card className="border shadow-sm">
      <CardHeader className="gap-2">
        <p className="text-sm text-muted-foreground">Course price</p>
        <CardTitle className="text-3xl font-black tracking-tight text-primary">
          {formatPrice(course.price) ?? "Price unavailable"}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {facts.map(({ icon: Icon, label, value }) => (
            <li
              key={label}
              className="flex items-center justify-between gap-3 text-sm"
            >
              <span className="inline-flex items-center gap-2 text-muted-foreground">
                <Icon aria-hidden="true" className="size-4" />
                {label}
              </span>
              <span className="font-medium text-foreground">{value}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="flex-col items-stretch gap-3">
        <Button
          type="button"
          size="lg"
          className="w-full"
          nativeButton={false}
          render={<a href="#curriculum" />}
        >
          Explore curriculum
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Browse the course outline before you begin.
        </p>
      </CardFooter>
    </Card>
  );
}

export default CourseSummaryCard;
