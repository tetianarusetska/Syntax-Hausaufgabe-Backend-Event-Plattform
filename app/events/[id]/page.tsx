"use client"

import { useParams, useSearchParams } from "next/navigation"
import ButtonPrevPage from "@/app/cl_components/ButtonPrevPage"
import Navbar from "@/app/cl_components/Navbar"

export default function Page() {

    const { id } = useParams<{ id: string }>()

    const searchParams = useSearchParams()
    const mode = searchParams.get("mode")



    return (
        <div className="min-h-screen w-full">

            <Navbar />

            <h1 className="font-['BebasNeue'] text-4xl mx-10 my-5">Event</h1>
            <p className="text-(--mainColor) font-['Fejoa'] text-2xl mx-10 my-5">Event-ID: {id}</p>

            <p className="text-(--mainColor) font-['Fejoa'] text-2xl mx-10 my-5 max-w-200">
                {
                    mode === "overview"
                        ?
                        "Ein spannendes Event mit Live-Musik, Essen und guter Atmosphäre für alle Altersgruppen."
                        : "Dieses Event bietet ein abwechslungsreiches Programm für die ganze Familie. Freu dich auf Live-Musik von lokalen Bands, ein vielfältiges kulinarisches Angebot verschiedener Food-Trucks sowie Aktivitäten für Kinder und Erwachsene. Die Veranstaltung findet bei jedem Wetter statt und dauert von 12:00 bis 22:00 Uhr. Parkplätze sind in der Nähe verfügbar, der Eintritt ist kostenlos."
                }
            </p>

            <ButtonPrevPage />

        </div>
    )
}