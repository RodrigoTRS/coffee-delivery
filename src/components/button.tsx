import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "lg" | "sm" | "icon",
    selected?: boolean
}

export function Button({
    size = "lg",
    className,
    selected,
    ...props
}: ButtonProps) {
    const classes = clsx(
        "flex items-center justify-center gap-2 border-radius rounded-md text-sm",
        "hover:opacity-80",
        "disabled:opacity-50",
        size === "lg" && "px-6 py-3",
        size === "sm" && "px-4 py-2",
        size === "icon" && "w-10 h-10",
        selected && "bg-purple-light border-2 border-purple-dark",
        className 
    );

    return (
        <button
            className={classes}
            {...props}
        />
    );
}
