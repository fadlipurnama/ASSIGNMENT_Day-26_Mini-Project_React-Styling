import {
  Card,
  CardFooter,
  CardHeader,
} from "@/components/atoms/card";

function CourseCardSkeleton() {
  return (
    <Card
      aria-hidden="true"
      className="animate-pulse motion-reduce:animate-none border shadow-md gap-3 pt-0"
    >
      <div className="aspect-video w-full bg-muted" />
      <CardHeader className="flex-1 gap-3">
        <div className="h-5 w-3/4 rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-3 w-full rounded bg-muted" />
          <div className="h-3 w-5/6 rounded bg-muted" />
        </div>
        <div className="h-6 w-20 rounded bg-muted" />
      </CardHeader>
      <CardFooter className="justify-between gap-2">
        <div className="h-3 w-24 rounded bg-muted" />
        <div className="h-4 w-14 rounded bg-muted" />
      </CardFooter>
    </Card>
  );
}

export default CourseCardSkeleton;
