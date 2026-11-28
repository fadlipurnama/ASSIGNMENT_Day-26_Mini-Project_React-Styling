import { BookOpen, Clock3 } from "lucide-react";
import { Badge } from "@/components/atoms/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

function CourseCurriculum({ curriculum }) {
  const sections = curriculum?.sections ?? [];

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2
            id="curriculum-heading"
            className="text-2xl font-bold tracking-tight"
          >
            Course curriculum
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {curriculum?.totalSections ?? sections.length} sections
            {curriculum?.totalLessons != null &&
              ` · ${curriculum.totalLessons} lessons`}
            {curriculum?.totalDuration && ` · ${curriculum.totalDuration}`}
          </p>
        </div>
      </div>

      {sections.length === 0 ? (
        <p className="rounded-xl border bg-card p-5 text-sm text-muted-foreground">
          The curriculum for this course is not available yet.
        </p>
      ) : (
        <div className="space-y-4">
          {sections.map((section, sectionIndex) => {
            const lessons = section.lessons ?? [];

            return (
              <Card key={section.id ?? section.title ?? sectionIndex}>
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <CardTitle className="font-semibold">
                        {section.title}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {section.lessonCount ?? lessons.length} lessons
                      </p>
                    </div>
                    {section.duration && (
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock3 aria-hidden="true" className="size-3.5" />
                        {section.duration}
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  {lessons.length > 0 ? (
                    <ul className="divide-y divide-border">
                      {lessons.map((lesson, lessonIndex) => (
                        <li
                          key={lesson.id ?? lesson.title ?? lessonIndex}
                          className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            <BookOpen
                              aria-hidden="true"
                              className="size-4 shrink-0 text-muted-foreground"
                            />
                            <span className="truncate text-sm font-medium">
                              {lesson.title}
                            </span>
                            {lesson.isPreview && (
                              <Badge variant="secondary">Preview</Badge>
                            )}
                          </div>
                          {lesson.duration && (
                            <span className="shrink-0 text-xs text-muted-foreground">
                              {lesson.duration}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      Lessons have not been added to this section yet.
                    </p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default CourseCurriculum;
