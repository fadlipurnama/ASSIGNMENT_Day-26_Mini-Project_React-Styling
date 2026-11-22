import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("not-found-body");

    return () => {
       document.body.classList.remove("not-found-body");
    }
  }, []);

  return (
    <section className="w-full flex min-h-[calc(100vh-10rem)] items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4">
        <span className="rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Error 404
        </span>

        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Page Not Found
        </h1>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <Button type="button" onClick={() => navigate("/")} className="gap-2">
            <ArrowLeft className="size-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
