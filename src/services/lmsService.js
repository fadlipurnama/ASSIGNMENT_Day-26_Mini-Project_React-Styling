import { supabaseApi } from "@/lib/supabaseApi";

export async function fetchCourses() {
  const { data } = await supabaseApi.get('/courses', {
    params: {
      select: '*',
      order: 'id.asc',
    },
  });
  return data;
}

export async function fetchBenefits() {
  const { data } = await supabaseApi.get('/benefits', {
    params: {
      select: '*',
      order: 'id.asc',
    },
  });
  return data;
}