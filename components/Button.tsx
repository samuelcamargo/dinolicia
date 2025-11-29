import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl";
  
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {buttonContent}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {buttonContent}
    </button>
  );
}

