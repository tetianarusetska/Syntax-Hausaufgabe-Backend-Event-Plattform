import { updateEvent } from "../actions";
import { type Event } from "../../types/Event";

export default function EditEventForm({ event }: { event: Event }) {

    return (

        <form action={updateEvent} className="flex flex-col gap-5 mx-10 text-(--bgColor)">

            <h1 className="font-['Fejoa'] text-2xl font-bold underline">
                Event bearbeiten
            </h1>

            <input type="hidden" name="id" value={event.id} />

            <input
                name="title"
                defaultValue={event.title}
                required
                className="border border-(--bgColor) w-80 h-8 font-['Fejoa'] text-2xl"
            />

            <input
                name="location"
                defaultValue={event.location}
                required
                className="border border-(--bgColor) w-80 h-8 font-['Fejoa'] text-2xl"
            />

            <input
                name="date"
                type="date"
                defaultValue={event.date.toISOString().split("T")[0]}
                required
                className="border border-(--bgColor) w-80 h-8 font-['Fejoa'] text-2xl"
            />

            <label className="flex flex-row gap-4 font-['Fejoa'] text-2xl">
                <input
                    type="checkbox"
                    name="isPublic"
                    defaultChecked={event.isPublic}
                    className="w-6 h-6"
                />
                Öffentlich
            </label>

            <button
                type="submit"
                className="flex justify-center items-center rounded-4xl bg-blue-800 text-(--mainColor) w-57 h-10 px-7 py-4 font-['Kosmos']"
            >
                Speichern
            </button>

        </form>
    )
}