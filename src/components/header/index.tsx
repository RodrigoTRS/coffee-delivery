import Image from "next/image";
import Logo from "@/../public/logo.png"
import { MapPin } from "lucide-react";
import { CartButton } from "./cart-button";
import Link from "next/link";
import { Button } from "../button";

export function Header() {
    return (
        <header className="flex items-center justify-center bg-background border-b">
            <div className="flex items-center justify-between w-full max-w-[1120px] px-12 py-4">
                <Link href="/" className="hover:opacity-80">
                    <Image src={Logo} alt="Coffee delivery logo" width={84} height={40} />
                </Link>
                
                <nav className="flex items-center gap-2">
                    <Button size="sm" className="bg-purple-light text-purple-dark font-medium pl-2.5">
                        <MapPin className="w-5 h-5" />
                        Porto Alegre, RS
                    </Button>
                    <CartButton />
                </nav>
            </div>
        </header>
    )
}