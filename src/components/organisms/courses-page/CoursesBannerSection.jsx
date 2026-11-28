import { Input } from "../../atoms/input";
import CourseCategoryFilter from "../../molecules/course/CourseCategoryFilter";
import BreadcrumbNav from "@/components/molecules/BreadcrumbNav";

function CoursesBannerSection({
  breadcrumbs = [],
  title,
  description,
  categories = [],
  categoriesLoading = false,
  categoriesError,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
}) {
  return (
    <section className="container flex w-full flex-col gap-6 rounded-xl border bg-linear-to-br from-primary via-primary/85 to-primary/50 p-5 text-primary-foreground shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          {breadcrumbs.length > 0 && <BreadcrumbNav items={breadcrumbs} />}

          {title && (
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          )}
          {description && (
            <p className="text-sm text-primary-foreground/80">{description}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <CourseCategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />

        <div className="w-full md:max-w-xs">
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <Input
            id="course-search"
            type="search"
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search courses..."
            aria-label="Search courses"
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>
      {categoriesLoading && (
        <p role="status" className="text-xs text-primary-foreground/80">
          Loading categories...
        </p>
      )}
      {categoriesError && (
        <p role="alert" className="text-xs text-red-100">
          Failed to load categories:{" "}
          {categoriesError.message ?? "Please try again."}
        </p>
      )}
    </section>
  );
}

export default CoursesBannerSection;
