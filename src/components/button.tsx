import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {}

export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-black/30 text-white uppercase p-3 cursor-pointer hover:bg-black/40 transition-colors duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
