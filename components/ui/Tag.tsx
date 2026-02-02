import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function Tag({
  children,
  variant = "default",
  size = "sm",
  className,
}: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full",
        {
          "bg-gray-800 text-gray-300": variant === "default",
          "border border-gray-700 text-gray-400": variant === "outline",
        },
        {
          "px-2.5 py-0.5 text-xs": size === "sm",
          "px-3 py-1 text-sm": size === "md",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
