import { useState } from "react";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/atoms/button";
import CollectionStatusView from "@/components/molecules/CollectionStatusView";
import CourseCard from "@/components/molecules/course/CourseCard";
import CourseCardSkeleton from "@/components/molecules/course/CourseCardSkeleton";
import CourseDialog from "@/components/molecules/course/CourseDialog";
import { useFeaturedCourses } from "@/hooks/useFeaturedCourses";

function FeaturedSection() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const {
    data = [],
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
  } = useFeaturedCourses();

  return (
    <section
      aria-busy={isLoading}
      className="container flex flex-col gap-10 p-4 bg-background"
    >
      <div className="flex gap-4">
        <h2 className="text-foreground font-black text-3xl tracking-[-1px]">
          Start Learning Design & Development
          <br />
          with OurFeatured Courses
        </h2>
        {isError && (
          <Button
            type="button"
            onClick={() => refetch()}
            size="sm"
            className="mt-2 flex gap-2"
          >
            Retry
            <RotateCw />
          </Button>
        )}
      </div>
      <CollectionStatusView
        items={data}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        error={error}
        loadingText="Loading featured courses..."
        fetchingText="Updating featured courses..."
        errorText="Failed to load featured courses."
        emptyText="No featured courses are available."
        renderSkeleton={() => (
          <div
            aria-hidden="true"
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {Array.from({ length: 4 }, (_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        )}
        renderItems={(courses) => (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                mode="modal"
                onPreviewCourse={setSelectedCourse}
              />
            ))}
          </div>
        )}
      />
      <CourseDialog
        selectedCourse={selectedCourse}
        setSelectedCourse={setSelectedCourse}
      />
    </section>
  );
}

export default FeaturedSection;
