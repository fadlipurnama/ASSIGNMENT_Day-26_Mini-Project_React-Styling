import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCategories, fetchCourses } from "@/services/lms-service";

const COURSES_PER_PAGE = 8;

export function useCoursesCatalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [requestedPage, setRequestedPage] = useState(1);

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    retry: false,
    staleTime: 60_000,
  });

  const categories = categoriesQuery.data ?? [];
  const selectedCategoryId =
    selectedCategory === "all"
      ? undefined
      : categories.find((category) => category.slug === selectedCategory)?.id;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(searchTerm.trim());
      setRequestedPage(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  const params = useMemo(
    () => ({
      page: requestedPage,
      limit: COURSES_PER_PAGE,
      sort: "newest",
      ...(debouncedSearch ? { search: debouncedSearch } : {}),
      ...(selectedCategoryId != null
        ? { category_id: selectedCategoryId }
        : {}),
    }),
    [debouncedSearch, requestedPage, selectedCategoryId],
  );

  const coursesQuery = useQuery({
    queryKey: ["courses", "catalog", params],
    queryFn: () => fetchCourses(params),
    retry: false,
    staleTime: 60_000,
    enabled: selectedCategory === "all" || selectedCategoryId != null,
  });

  const courses = coursesQuery.data?.courses ?? [];
  const totalCourses = coursesQuery.data?.meta.total ?? 0;
  const totalPages = coursesQuery.data?.meta.pages ?? 0;
  const currentPage = coursesQuery.data?.meta.page ?? requestedPage;

  function handleCategoryChange(category) {
    setSelectedCategory(category);
    setRequestedPage(1);
  }

  function handleSearchChange(value) {
    setSearchTerm(value);
  }

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      setRequestedPage(page);
    }
  }

  return {
    categories,
    categoriesLoading: categoriesQuery.isLoading,
    categoriesError: categoriesQuery.error,
    selectedCategory,
    selectedCategoryName:
      categories.find((category) => category.slug === selectedCategory)?.name ??
      "All Courses",
    searchTerm,
    courses,
    totalCourses,
    currentPage,
    totalPages,
    isLoading: coursesQuery.isLoading,
    isError: coursesQuery.isError,
    error: coursesQuery.error,
    refetch: coursesQuery.refetch,
    isFetching: coursesQuery.isFetching,
    onCategoryChange: handleCategoryChange,
    onSearchChange: handleSearchChange,
    onPageChange: handlePageChange,
  };
}
