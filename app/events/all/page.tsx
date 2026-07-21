import Navbar from "@/app/cl_components/Navbar";
import { getAllEvents } from "../actions";
import { type Event } from "../../types/Event";

export const dynamic = "force-dynamic";

export default async function AllEventsPage() {
    const events: Event[] = await getAllEvents();

    return (
        <>
            <div className="min-h-screen w-full flex flex-col gap-10">

                <Navbar />

                <div className="font-['Fejoa'] text-2xl mx-10">

                    <h1 className="text-5xl font-['BebasNeue']">Events</h1>

                    <ul className="flex flex-col gap-5 mt-10 w-80 border border-(--mainColor) rounded-2xl px-4 py-4">
                        {events.map((event) => (
                            <li key={event.id}>
                                <h3>{event.title}</h3>
                                <p>Ort: {event.location}</p>
                                <p>Datum: {event.date.toLocaleDateString()}</p>
                                <p>Status: {event.isPublic ? "Öffentlich" : "Privat"}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}