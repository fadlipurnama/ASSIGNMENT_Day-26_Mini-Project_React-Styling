import CoursesBannerSection from "@/components/organisms/courses-page/CoursesBannerSection";
import CourseList from "@/components/organisms/courses-page/CourseListSection";
import { useCoursesCatalog } from "@/hooks/useCoursesCatalog";

function CoursesPage() {
  const {
    categories,
    categoriesLoading,
    categoriesError,
    selectedCategory,
    selectedCategoryName,
    searchTerm,
    courses,
    totalCourses,
    currentPage,
    totalPages,
    isLoading,
    isError,
    error,
    refetch,
    isFetching,
    onCategoryChange,
    onSearchChange,
    onPageChange,
  } = useCoursesCatalog();

  return (
    <>
      <CoursesBannerSection
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Courses" }]}
        title={selectedCategoryName}
        description="Find a course that matches your interests."
        categories={categories}
        categoriesLoading={categoriesLoading}
        categoriesError={categoriesError}
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
      />

      <CourseList
        title={selectedCategoryName}
        courses={courses}
        totalCourses={totalCourses}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        isLoading={isLoading}
        isError={isError}
        error={error}
        onRetry={refetch}
        isFetching={isFetching}
      />
    </>
  );
}

export default CoursesPage;
