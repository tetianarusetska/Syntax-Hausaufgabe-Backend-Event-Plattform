"use client";

import { useEffect } from "react";
import { ErrorProps } from "../../types/ErrorProps";

export default function Error({ error, reset }: ErrorProps) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (

        <div className="min-h-screen w-full">

            <p className="text-(--mainColor) font-['BebasNeue'] text-2xl mx-10 my-5">
                Beim Laden des Events ist ein Fehler aufgetreten.
            </p>

            <p className="text-(--mainColor) font-['Fejoa'] text-xl mx-10 my-5">
                Das Event konnte nicht geladen werden. Bitte versuche es später erneut.
            </p>

            <button
                onClick={reset}
                className="rounded-4xl bg-blue-800 text-(--mainColor) px-7 py-4 font-['Kosmos'] mx-10 mt-5"
            >
                Erneut versuchen
            </button>

        </div>
    );

}