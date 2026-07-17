import Link from "next/link";
import Navbar from "../cl_components/Navbar";

export default async function EvetsPage() {

    await new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });

    return (
        <>
            <Navbar />

            <div className="min-h-screen w-full">
                <h1 className="text-5xl font-['BebasNeue'] m-10">Events</h1>
                <div className="flex flex-row mx-10 my-2 gap-10">
                    <Link href="/events/1?mode=overview" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Übersicht</Link>
                    <Link href="/events/1?mode=details" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Details</Link>
                    <Link href="/events/2?mode=details" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Details</Link>
                </div>
            </div>
        </>
    )
}