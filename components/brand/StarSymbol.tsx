import React from "react";

interface StarSymbolProps {
  className?: string;
  size?: number;
  color?: string;
}

/**
 * Official CRORESTARS 4-Point Star / Spark Symbol
 *
 * Represents "Chukkala" (stars / countless individual possibilities)
 * converging into a unified point of light.
 */
export default function StarSymbol({
  className = "w-4 h-4",
  size,
  color = "#E5932B",
}: StarSymbolProps) {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 1.5C12 7.29899 7.29899 12 1.5 12C7.29899 12 12 16.701 12 22.5C12 16.701 16.701 12 22.5 12C16.701 12 12 7.29899 12 1.5Z"
        fill={color}
      />
    </svg>
  );
}
