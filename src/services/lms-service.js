import { apiClient } from "@/lib/api-client";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function assertApiBaseUrl() {
  if (!API_BASE_URL) {
    throw new Error("VITE_API_BASE_URL is not configured.");
  }
}

function parseJsonField(value) {
  return typeof value === "string" ? JSON.parse(value) : value;
}

function normalizeCourse({ review_count, ...course }) {
  return {
    ...course,
    reviewCount: review_count == null ? undefined : Number(review_count),
    curriculum: parseJsonField(course.curriculum),
    reviews: parseJsonField(course.reviews),
  };
}

async function requestCourses(params) {
  assertApiBaseUrl();

  const { data: response } = await apiClient.get("/api/courses", { params });
  if (!Array.isArray(response?.data) || !response?.meta) {
    throw new Error(
      "Invalid courses response: expected data and pagination metadata.",
    );
  }

  return {
    courses: response.data.map(normalizeCourse),
    meta: response.meta,
  };
}

export async function fetchCoursesByFeatured() {
  const { courses } = await requestCourses({
    limit: 4,
    featured: "true",
    sort: "newest",
  });
  return courses;
}

export function fetchCourses(params = {}) {
  return requestCourses({ limit: 8, sort: "newest", ...params });
}

export async function fetchCourseBySlug(slug) {
  assertApiBaseUrl();

  if (!slug) {
    throw new Error("A course slug is required.");
  }

  const { data: course } = await apiClient.get(
    `/api/courses/${encodeURIComponent(slug)}`,
  );
  if (!course || typeof course !== "object" || Array.isArray(course)) {
    throw new Error("Invalid course response.");
  }

  return normalizeCourse(course);
}

export async function fetchCategories() {
  assertApiBaseUrl();

  const { data } = await apiClient.get("/api/categories");
  if (!Array.isArray(data)) {
    throw new Error("Invalid categories response: expected an array.");
  }

  return data;
}

export async function fetchBenefits() {
  assertApiBaseUrl();

  const { data } = await apiClient.get("/api/benefits");
  if (!Array.isArray(data)) {
    throw new Error("Invalid benefits response: expected an array.");
  }

  return data;
}
