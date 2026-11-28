import { useQuery } from "@tanstack/react-query";
import { fetchCoursesByFeatured } from "@/services/lms-service";

export function useFeaturedCourses() {
  return useQuery({
    queryKey: ["courses", "featured"],
    queryFn: fetchCoursesByFeatured,
    retry: false,
    staleTime: 60_000,
  });
}
