import { ThemeType } from "@/helpers/general/theme";
import { themeMode } from "@/redux/slice/themeSlice";
import { MouseEventHandler, ReactNode } from "react";
import { useSelector } from "react-redux";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ThemedButton = ({ children, onClick, className = "" }: ButtonProps) => {
  const theme: ThemeType = useSelector(themeMode);

  return (
    <button onClick={onClick} className={`${theme.mode} ${className}`}>
      {children}
    </button>
  );
};

export default ThemedButton;
