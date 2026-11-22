import { Badge } from "../atoms/badge";
import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogContent,
  DialogHeader,
} from "../atoms/dialog";

function CourseDialog({ selectedCourse, setSelectedCourse }) {
  return (
    <Dialog
      open={Boolean(selectedCourse)}
      onOpenChange={(open) => {
        if (!open) setSelectedCourse(null);
      }}
    >
      <DialogContent className="flex max-h-[85vh] flex-col overflow-hidden sm:max-w-lg">
        {selectedCourse && (
          <>
            <DialogHeader>
              <DialogTitle>{selectedCourse.title}</DialogTitle>
              <DialogDescription>
                {selectedCourse.description}
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              {selectedCourse.curriculum?.totalLessons != null && (
                <span>{selectedCourse.curriculum.totalLessons} lessons</span>
              )}
              {selectedCourse.curriculum?.totalLessons != null &&
                selectedCourse.curriculum?.totalDuration && (
                  <span aria-hidden="true">•</span>
                )}
              {selectedCourse.curriculum?.totalDuration && (
                <span>{selectedCourse.curriculum.totalDuration}</span>
              )}
            </div>

            <div className="mt-2 min-h-0 flex-1 space-y-3 overflow-y-auto pr-1">
              {(selectedCourse?.curriculum?.sections ?? []).map((section) => (
                <div key={section.id} className="rounded-lg border bg-card p-3">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold">{section.title}</h3>
                    {section.duration && (
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {section.duration}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-1 text-sm">
                    {section.lessons?.map((lesson) => (
                      <li
                        key={lesson.id}
                        className="flex items-center justify-between gap-3 rounded px-2 py-1 text-muted-foreground hover:bg-muted/60"
                      >
                        <div className="flex min-w-0 items-center gap-2">
                          <p className="truncate text-foreground">
                            {lesson.title}
                          </p>
                          {lesson.isPreview && (
                            <Badge className="shrink-0 rounded bg-primary/15 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                              Preview
                            </Badge>
                          )}
                        </div>
                        {lesson.duration && (
                          <span className="shrink-0 text-xs">
                            {lesson.duration}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CourseDialog;
