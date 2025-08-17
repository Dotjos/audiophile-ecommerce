"use client";
import { ReactNode, MouseEvent } from "react";

interface BackdropProps {
  isVisible?: boolean;
  onClick?: ((event: MouseEvent<HTMLDivElement>) => void) | null;
  className?: string;
  children?: ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({ 
  isVisible = true,
  onClick = null,
  className = "",
  children = null,
}) => {
  if (!isVisible) return null;

  const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
    // Only trigger onClick if clicking the backdrop itself (not children)
    if (e.target === e.currentTarget && onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={`absolute w-full min-h-screen bg-PureBlack-100/40 z-40 transition-opacity ${className}`}
      onClick={handleClick}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};


export default Backdrop;