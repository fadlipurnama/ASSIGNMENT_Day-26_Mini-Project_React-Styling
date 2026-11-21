import { fetchCourses } from "@/services/data";
import { Button } from "@base-ui/react";
import { RotateCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import CourseList from "../molecules/CourseList";

function CoursesSection() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
    retry: false,
    staleTime: 60_000,
  });

  const errorMessage = error?.message
    ? `${error.message}${error?.status ? `, status code: ${error.status}` : ""}`
    : "Failed to load courses data";

  return (
    <section className="container flex flex-col gap-10 p-4 bg-background">
      <div className="flex gap-4 items-center">
        <h2 className="max-w-1/2 text-foreground font-black text-3xl tracking-[-1px]">
          Start Learning Design & Development with Our Featured Courses
        </h2>
        {error && (
          <Button
            onClick={() => refetch()}
            variant="secondary"
            size="sm"
            className="flex gap-2"
          >
            Refresh
            <RotateCw />
          </Button>
        )}
      </div>
      {isLoading && (
        <div className="text-muted-foreground">Loading courses data...</div>
      )}
      {isError && <div className="text-destructive">{errorMessage}</div>}
      {data && (
        <>
          {isFetching ? (
            <p className="text-xs text-muted-foreground">
              Refetching courses data...
            </p>
          ) : (
            <CourseList courses={data ?? []} className="col-span-2" />
          )}
        </>
      )}
    </section>
  );
}

export default CoursesSection;
