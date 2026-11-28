import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/atoms/breadcrumb";

function BreadcrumbNav({ items = [], className = "" }) {
  if (items.length === 0) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-base text-primary-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={`${item.label}-${index}`}>
              <BreadcrumbItem>
                {isLast || !item.to ? (
                  <BreadcrumbPage className="font-medium text-primary-foreground">
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={<Link to={item.to} />}
                    className="hover:text-primary-foreground hover:underline"
                  >
                    {item.label}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && (
                <BreadcrumbSeparator className="text-primary-foreground/60" />
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

export default BreadcrumbNav;
