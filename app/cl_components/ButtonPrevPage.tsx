"use client";

import { useRouter } from "next/navigation"

export default function ButtonPrevPage() {

    const router = useRouter()

    return (
        <button 
        onClick={() => router.back()}
        className="absolute bottom-10 rounded-4xl bg-blue-800 text-(--mainColor) px-7 py-4 font-['Kosmos'] mx-10 mt-5"
        >
            Zurück
            </button>
    )
}
