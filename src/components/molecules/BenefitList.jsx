import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { DynamicIcon } from "@/components/atoms/dynamic-icon";
import { cn } from "cn";

function BenefitList({ benefits, className = "" }) {
  return (
    <div className={cn("grid sm:grid-cols-2 gap-4", className)}>
      {benefits.map(({ id, icon, title, description }) => (
        <Card
          key={id}
          className="border cursor-pointer shadow-md hover:border-primary hover:shadow-lg"
        >
          <CardHeader>
            <DynamicIcon name={icon} className="size-8 text-primary" />
            <CardTitle className="text-base font-semibold">
              <h3>{title}</h3>
            </CardTitle>
            <CardDescription className="text-foreground-muted">
              <p>{description}</p>
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default BenefitList;
