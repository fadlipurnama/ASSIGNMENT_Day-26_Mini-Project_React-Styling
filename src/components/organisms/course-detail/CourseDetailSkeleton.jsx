function CourseDetailSkeleton() {
  return (
    <div aria-busy="true" className="container flex flex-col gap-8">
      <p role="status" className="sr-only">
        Loading course details...
      </p>
      <div className="h-4 w-48 animate-pulse rounded bg-muted motion-reduce:animate-none" />
      <div className="grid overflow-hidden rounded-2xl border bg-card lg:grid-cols-2">
        <div className="space-y-5 p-6 sm:p-8 lg:p-10">
          <div className="h-6 w-36 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          <div className="h-10 w-4/5 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          <div className="space-y-2">
            <div className="h-4 w-full animate-pulse rounded bg-muted motion-reduce:animate-none" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          </div>
          <div className="h-5 w-56 animate-pulse rounded bg-muted motion-reduce:animate-none" />
        </div>
        <div className="min-h-64 animate-pulse bg-muted motion-reduce:animate-none lg:min-h-100" />
      </div>
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-4">
          <div className="h-8 w-56 animate-pulse rounded bg-muted motion-reduce:animate-none" />
          <div className="h-40 animate-pulse rounded-xl bg-muted motion-reduce:animate-none" />
          <div className="h-40 animate-pulse rounded-xl bg-muted motion-reduce:animate-none" />
        </div>
        <div className="h-72 animate-pulse rounded-xl bg-muted motion-reduce:animate-none" />
      </div>
    </div>
  );
}

export default CourseDetailSkeleton;
