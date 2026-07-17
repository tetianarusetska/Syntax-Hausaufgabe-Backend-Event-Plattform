import Link from "next/link";

export default function ButtonToHome() {
    return (
        <Link
            href="/"
            className="rounded-4xl bg-blue-800 text-(--mainColor) px-7 py-4 font-['Kosmos'] mx-10"
        >
            Zur Startseite 
        </Link>
    )
}