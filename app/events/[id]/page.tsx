// Aufgabe 4
// Page als async Server Component

import ButtonPrevPage from "@/app/cl_components/ButtonPrevPage"
import Navbar from "@/app/cl_components/Navbar"
import { type PageProps } from "../../types/PageProps"

export default async function Page({ params, searchParams }: PageProps) {

    await new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });

    const { id } = await params;
    const { mode } = await searchParams;

    // Aufgabe 5
    // Test
    if (id === "0" || id === "999") {
        throw new Error("Event konnte nicht geladen werden.");
    }


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