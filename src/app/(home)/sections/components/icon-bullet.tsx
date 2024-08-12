import clsx from "clsx";
import { ReactNode } from "react";


interface IconBulletProps {
    icon: ReactNode,
    text: string
    color: "purple" | "yellow" | "gray"
}

export function IconBullet({
    icon: Icon,
    text,
    color
}: IconBulletProps ) {
    return (
        <span className="flex items-center gap-4">
            <div className={clsx(
                "flex items-center justify-center w-12 h-12 rounded-full",
                color === "purple" && "bg-purple",
                color === "yellow" && "bg-yellow-dark",
                color === "gray" && "bg-muted-foreground"
            )}>
                <span className="text-background">
                    {Icon}
                </span>
            </div>

            <p className="text-muted-foreground text-lg leading-5 flex-1">{text}</p>
        </span>
    )
}