import { BENEFIT_LIST } from "@/data/benefits";
import { COURSES_LIST } from "@/data/courses";

export async function fetchBenefits() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // const err = new Error("Failed to load benefits data");
  // err.status = 500;
  // throw err;

  return BENEFIT_LIST;
}
export async function fetchCourses() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // const err = new Error("Failed to load benefits data");
  // err.status = 500;
  // throw err;

  return COURSES_LIST;
}
