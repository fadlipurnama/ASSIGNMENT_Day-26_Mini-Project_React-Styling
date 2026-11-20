import { BENEFIT_LIST } from "@/data/benefits";

export async function fetchBenefits() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

    // const err = new Error("Failed to load benefits data");
    // err.status = 500;
    // throw err;

  return BENEFIT_LIST;
}
