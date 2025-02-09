import { ReactNode, RefObject } from "react";

interface ThemedContainerProps {
  className?: string;
  children?: ReactNode;
  ref?: RefObject<HTMLDivElement> | null;
}

const ThemedContainer = ({
  className,
  children,
  ref,
}: ThemedContainerProps) => {
  return (
    <div className={className} {...ref}>
      {children}
    </div>
  );
};

export default ThemedContainer;
