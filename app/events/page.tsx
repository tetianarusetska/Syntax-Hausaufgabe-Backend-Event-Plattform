import Link from "next/link";
import Navbar from "../cl_components/Navbar";
import { createEvent, getPublicEvents } from "./actions";
import { type Event } from "../types/Event"

export const dynamic = "force-dynamic";

export default async function EventsPage() {

    const events: Event[] = await getPublicEvents();

    await new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });

    return (
        <>
            <div className="min-h-screen w-full flex flex-col gap-10">
                <Navbar />


                <h1 className="text-5xl font-['BebasNeue'] mx-10">Events</h1>
                <div className="flex flex-row mx-10 gap-10">
                    <Link href="/events/1?mode=overview" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Übersicht</Link>
                    <Link href="/events/1?mode=details" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Details</Link>
                    <Link href="/events/2?mode=details" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Details</Link>
                </div>


                <form action={createEvent} className="flex flex-col gap-5 mx-10">

                    <h1 className="font-['Fejoa'] text-2xl font-bold underline">Form</h1>

                    <input name="title" placeholder="Titel" required className="border border-(--mainColor) w-80 h-8 font-['Fejoa'] text-2xl" />
                    <input name="location" placeholder="Ort" required className="border border-(--mainColor) w-80 h-8 font-['Fejoa'] text-2xl" />
                    <input name="date" type="date" required className="border border-(--mainColor) w-80 h-8 font-['Fejoa'] text-2xl" />

                    <label className="flex flex-row gap-4 font-['Fejoa'] text-2xl">
                        <input type="checkbox" name="isPublic" className="w-6 h-6 " />
                        Öffentlich
                    </label>

                    <button
                        type="submit"
                        className="flex justify-center items-center rounded-4xl bg-blue-800 text-(--mainColor) w-57 h-10 px-7 py-4 font-['Kosmos']"
                    >
                        Event anlegen
                    </button>

                </form>

                <div className="mx-10 font-['Fejoa'] text-2xl">

                    <h1 className="text-5xl font-['BebasNeue'] mt-10">Öffentliche Events</h1>

                    <ul className="flex flex-col gap-5 mt-10 w-80 border border-(--mainColor) rounded-2xl px-4 py-4">
                        {events.map((event) => {

                            const isOld = event.date < new Date();
                            
                            return (
                                <li key={event.id}>
                                    <h3>{event.title}</h3>
                                    <p>Ort: {event.location}</p>
                                    <p>Datum: {event.date.toLocaleDateString("de-DE", {
                                        day: "2-digit",
                                        month: "long",
                                        year: "numeric"
                                    })}
                                    </p>
                                    <p>Status: Öffentlich</p>
                                    {isOld && (
                                        <p className="text-red-600 font-bold">
                                            Vergangenes Event
                                        </p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>

            </div>
        </>
    )
}

