import { ReactNode } from "react";

type ButtonProps = {
  onClick: (value?: any) => void;
  children: ReactNode;
};
export function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-yellow-500 border-2 border-solid border-white text-white font-bold rounded-md px-5 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
