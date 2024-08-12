import clsx from "clsx";
import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        const classes = clsx(
            "flex items-start rounded-md border border-neutral-300 bg-neutral-200 p-4",
            className
        );

        return (
            <input
                ref={ref}
                className={classes}
                {...props}
            />
        );
    }
);

Input.displayName = 'Input'; // Optional: Helpful for debugging
