import { Button } from "@/components/atoms/button";

function CourseCategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  const options = [{ slug: "all", name: "All Courses" }, ...categories];

  return (
    <div
      aria-label="Filter courses by category"
      className="flex flex-wrap items-center gap-2"
      role="group"
    >
      {options.map((category) => {
        const isSelected = selectedCategory === category.slug;

        return (
          <Button
            key={category.slug}
            type="button"
            variant="ghost"
            size="sm"
            aria-pressed={isSelected}
            onClick={() => onCategoryChange(category.slug)}
            className={
              isSelected
                ? "bg-background font-semibold text-foreground shadow-xs"
                : "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25"
            }
          >
            {category.name}
          </Button>
        );
      })}
    </div>
  );
}

export default CourseCategoryFilter;
