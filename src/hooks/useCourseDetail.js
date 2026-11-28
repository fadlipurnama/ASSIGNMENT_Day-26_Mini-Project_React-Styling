import { useQuery } from "@tanstack/react-query";
import { fetchCourseBySlug } from "@/services/lms-service";

export function useCourseDetail(slug) {
  return useQuery({
    queryKey: ["courses", "detail", slug],
    queryFn: () => fetchCourseBySlug(slug),
    enabled: Boolean(slug),
    retry: false,
    staleTime: 60_000,
  });
}
