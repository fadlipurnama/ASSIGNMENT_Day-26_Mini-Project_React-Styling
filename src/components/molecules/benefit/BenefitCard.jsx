import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { DynamicIcon } from "@/components/atoms/dynamic-icon";

function BenefitCard({ benefit }) {
  return (
    <Card
      key={benefit.id}
      className="border cursor-pointer shadow-md hover:border-primary hover:shadow-lg"
    >
      <CardHeader>
        <DynamicIcon name={benefit.icon} className="size-8 text-primary" />
        <CardTitle className="text-base font-semibold">
          <h3>{benefit.title}</h3>
        </CardTitle>
        <CardDescription className="text-foreground-muted">
          <p>{benefit.description}</p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default BenefitCard;
