"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonToHome from "../s_components/ButtonToHome";


export default function Navbar() {

    const pathname = usePathname()

    const links = [
        { href: "/", label: "Home" },
        { href: "/events", label: "Events" },
    ];

    return (
        <>
            <div className="flex flex-row justify-between items-center mt-5">

                <nav className="flex flex-row justify-center items-center gap-10 my-5 mx-10 font-['BebasNeue'] text-2xl ">
                    {links.map(link => (
                        <span key={link.href}>
                            {pathname === link.href ? (
                                <span className="text-(--mainColor)">{link.label}</span>
                            ) : (
                                <Link href={link.href} className="text-blue-800 hover:underline">
                                    {link.label}
                                </Link>
                            )}
                        </span>
                    ))}
                </nav>

                <ButtonToHome />

            </div>
        </>
    );
}