import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({ children, subtitle, className = "" }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-500 mb-4">
        {children}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

