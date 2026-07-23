import Navbar from "@/app/cl_components/Navbar";
import { getAllEvents } from "../actions";
import { type Event } from "../../types/Event";
import EventPost from "../cl_components/EventPost";
import DeleteAllButton from "../s_components/DeleteAllButton";

export const dynamic = "force-dynamic";


export default async function AllEventsPage() {

    const events: Event[] = await getAllEvents();

    return (
        <>
            <div className="min-h-screen w-full flex flex-col gap-10">

                <Navbar />

                <div className="font-['Fejoa'] text-2xl mx-10">

                    <h1 className="text-5xl font-['BebasNeue']">Alle Events</h1>

                    <DeleteAllButton />

                    <ul>
                        {events.map((event) => (
                            <li key={event.id}
                                className="mt-10 w-130 border border-(--mainColor) rounded-2xl px-4 py-4"
                            >
                                <EventPost {...event} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}