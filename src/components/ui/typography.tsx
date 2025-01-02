import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const typographyVariants = cva("font-sans text-foreground antialiased", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black",
    },
    italic: {
      true: "italic",
    },
    uppercase: {
      true: "uppercase",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    italic: false,
    uppercase: false,
  },
});

export const Typography = ({
  as: Component = "p",
  size,
  weight,
  italic,
  uppercase,
  className,
  ...props
}: VariantProps<typeof typographyVariants> &
  React.HTMLAttributes<HTMLElement> & {
    as?: React.ElementType;
  }) => {
  return (
    <Component
      className={twMerge(
        typographyVariants({
          size,
          weight,
          italic,
          uppercase,
        }),
        className
      )}
      {...props}
    />
  );
};
