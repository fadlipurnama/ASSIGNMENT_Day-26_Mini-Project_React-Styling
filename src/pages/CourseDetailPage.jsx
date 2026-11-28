import { useParams } from "react-router-dom";
import CourseSummaryCard from "@/components/molecules/course/CourseSummaryCard";
import CourseCurriculum from "@/components/organisms/course-detail/CourseCurriculum";
import CourseDetailError from "@/components/organisms/course-detail/CourseDetailError";
import CourseDetailHero from "@/components/organisms/course-detail/CourseDetailHero";
import CourseDetailSkeleton from "@/components/organisms/course-detail/CourseDetailSkeleton";
import CourseReviews from "@/components/organisms/course-detail/CourseReviews";
import { useCourseDetail } from "@/hooks/useCourseDetail";

function CourseDetailPage() {
  const { slug } = useParams();
  const {
    data: course,
    isPending,
    isError,
    error,
    refetch,
  } = useCourseDetail(slug);

  if (!slug) {
    return <CourseDetailError isNotFound />;
  }

  if (isPending) {
    return <CourseDetailSkeleton />;
  }

  if (isError || !course) {
    return (
      <CourseDetailError
        isNotFound={error?.response?.status === 404}
        message={error?.message}
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className="container flex flex-col gap-10">
      <CourseDetailHero
        course={course}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Courses", to: "/courses" },
          { label: course.title },
        ]}
      />

      <section className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10">
        <div className="min-w-0 space-y-10 sm:space-y-12">
          <CourseCurriculum curriculum={course.curriculum} />
          <CourseReviews
            reviews={Array.isArray(course.reviews) ? course.reviews : []}
          />
        </div>
        <aside className="lg:sticky lg:top-20">
          <CourseSummaryCard course={course} />
        </aside>
      </section>
    </div>
  );
}

export default CourseDetailPage;
