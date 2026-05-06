import { cn } from "@/utils/cn";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type InitialFadeInProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delayMs?: number;
  durationMs?: number;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const InitialFadeIn = <T extends ElementType = "div">({
  as,
  children,
  className,
  delayMs,
  durationMs,
  ...rest
}: InitialFadeInProps<T>) => {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn("initial-fade-in", className)}
      style={{
        ...(delayMs != null ? ({ animationDelay: `${delayMs}ms` } as const) : null),
        ...(durationMs != null ? ({ animationDuration: `${durationMs}ms` } as const) : null),
      }}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default InitialFadeIn;
