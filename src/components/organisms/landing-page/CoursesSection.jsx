import { fetchCourses } from "@/services/data";
import { RotateCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
// import CourseList from "../../molecules/CourseList";
import { Button } from "../../atoms/button";
import CourseCard from "@/components/molecules/CourseCard";
import { useState } from "react";
import CourseDialog from "@/components/molecules/CourseDialog";

function CoursesSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
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
      <div className="flex gap-4">
        <h2 className="text-foreground font-black text-3xl tracking-[-1px]">
          Start Learning Design & Development
          <br />
          with OurFeatured Courses
        </h2>
        {error && (
          <Button
            onClick={() => refetch()}
            size="sm"
            className="flex gap-2 mt-2"
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
            <div className="col-span-2 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data?.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onPreviewCourse={(course) => setSelectedCourse(course)}
                />
              ))}
            </div>
          )}
        </>
      )}
      <CourseDialog
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
    </section>
  );
}

export default CoursesSection;
