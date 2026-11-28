import { AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/atoms/button";

function CourseDetailError({ isNotFound = false, message, onRetry }) {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <div className="mb-5 flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <AlertCircle aria-hidden="true" className="size-7" />
      </div>
      <h1 className="text-2xl font-bold tracking-tight">
        {isNotFound ? "Course not found" : "We couldn’t load this course"}
      </h1>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        {isNotFound
          ? "This course may have been removed or the link may be incorrect."
          : message || "Please check your connection and try again."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {!isNotFound && (
          <Button type="button" onClick={onRetry}>
            <RefreshCw aria-hidden="true" />
            Try again
          </Button>
        )}
        <Button
          type="button"
          variant="outline"
          nativeButton={false}
          render={<Link to="/courses" />}
        >
          <ArrowLeft aria-hidden="true" />
          Back to courses
        </Button>
      </div>
    </section>
  );
}

export default CourseDetailError;
