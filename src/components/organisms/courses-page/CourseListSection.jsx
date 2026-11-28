import { RotateCw } from "lucide-react";
import { Button } from "@/components/atoms/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/atoms/pagination";
import CollectionStatusView from "@/components/molecules/CollectionStatusView";
import CourseCard from "@/components/molecules/course/CourseCard";
import CourseCardSkeleton from "@/components/molecules/course/CourseCardSkeleton";

function CourseListSection({
  courses = [],
  currentPage = 1,
  totalPages = 0,
  onPageChange,
  isLoading = false,
  isError = false,
  error,
  onRetry,
  isFetching = false,
  skeletonCount = 8,
}) {
  const showPagination =
    Boolean(onPageChange) && !isLoading && !isError && totalPages > 1;

  function handlePageChange(event, page) {
    event.preventDefault();

    if (onPageChange && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  }

  return (
    <section
      aria-label="Course results"
      aria-busy={isLoading}
      className="container flex flex-col gap-5"
    >
      {isError && onRetry && (
        <div className="flex flex-wrap justify-end gap-3">
          <Button
            type="button"
            onClick={() => onRetry()}
            size="sm"
            className="flex gap-2"
          >
            Retry
            <RotateCw />
          </Button>
        </div>
      )}

      <CollectionStatusView
        items={courses}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        error={error}
        loadingText="Loading courses..."
        fetchingText="Updating courses..."
        errorText="Failed to load courses."
        emptyText="No courses match your filters."
        renderSkeleton={() => (
          <div
            aria-hidden="true"
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {Array.from({ length: skeletonCount }, (_, index) => (
              <CourseCardSkeleton key={index} />
            ))}
          </div>
        )}
        renderItems={(courseItems) => (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseItems.map((course) => (
              <CourseCard key={course.id} course={course} mode="detail" />
            ))}
          </div>
        )}
      />

      {showPagination && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${currentPage - 1}`}
                aria-disabled={currentPage === 1}
                tabIndex={currentPage === 1 ? -1 : undefined}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
                onClick={(event) => handlePageChange(event, currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => {
              const page = index + 1;

              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href={`?page=${page}`}
                    isActive={currentPage === page}
                    aria-label={`Go to page ${page}`}
                    onClick={(event) => handlePageChange(event, page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationNext
                href={`?page=${currentPage + 1}`}
                aria-disabled={currentPage === totalPages}
                tabIndex={currentPage === totalPages ? -1 : undefined}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
                onClick={(event) => handlePageChange(event, currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}

export default CourseListSection;
