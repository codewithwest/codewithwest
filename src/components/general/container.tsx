import { ReactNode } from "react";

interface container {
  className?: string;
  children?: ReactNode;
}

export const Container = ({ className, children }: container) => {
  return <div className={className}>{children}</div>;
};
