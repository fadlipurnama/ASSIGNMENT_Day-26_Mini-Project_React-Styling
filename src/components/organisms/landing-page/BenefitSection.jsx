import { useQuery } from "@tanstack/react-query";
import { Button } from "../../atoms/button";
import { RotateCw } from "lucide-react";
import BenefitCard from "@/components/molecules/benefit/BenefitCard";
import { fetchBenefits } from "@/services/lms-service";

function BenefitSection() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ["benefits"],
    queryFn: fetchBenefits,
    retry: false,
    staleTime: 60_000,
  });

  const errorMessage = error?.message
    ? `${error.message}${error?.status ? `, status code: ${error.status}` : ""}`
    : "Failed to load benefits data";

  return (
    <section className="container flex flex-col gap-10 p-4 bg-background">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-start">
          <h2 className="text-foreground font-black text-4xl leading-11.25 tracking-[-1px]">
            Why Choose EduLearn?
          </h2>
          {error && (
            <Button
              onClick={() => refetch()}
              size="sm"
              className="flex gap-2 mt-2"
            >
              Refresh
              <RotateCw />
            </Button>
          )}
        </div>
        <p className="font-normal text-base text-foreground-muted leading-6 tracking-normal max-w-180 ">
          Our platform is designed to provide a seamless and effective learning
          experience, ensuring you gain the skills you need to succeed.
        </p>
      </div>
      {isLoading && (
        <div className="text-muted-foreground">Loading benefits data...</div>
      )}
      {isError && <div className="text-destructive">{errorMessage}</div>}
      {data && (
        <>
          {isFetching ? (
            <p className="text-xs text-muted-foreground">
              Refetching benefits data...
            </p>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="col-span-2 grid sm:grid-cols-2 gap-4">
                {data.map((benefit) => (
                  <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
              </div>

              <div className="hidden lg:flex items-center">
                <img
                  src="assets/images/benefits.png"
                  alt="Image Benefits"
                  className="size-full object-contain"
                />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default BenefitSection;
