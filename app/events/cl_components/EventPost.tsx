"use client"

import { useTransition } from "react"
import { deleteEvent } from "../actions"
import { type Event } from "../../types/Event"
import EditEventButton from "./EditButton"

export default function EventPost({ id, title, location, date, isPublic }: Event) {

    const [isPending, startTransition] = useTransition()

    function handleDelete() {

        startTransition(async () => {
            try {
                await deleteEvent(id)
            } catch (error) {
                console.log(error)
            }
        })
    }

    const isOld = date < new Date();

    return (

        <div>
            <h3>{title}</h3>
            <p>Ort: {location}</p>
            <p>Datum: {date.toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            })}
            </p>
            <p>Status: {isPublic ? "Öffentlich" : "Privat"}</p>
            {isOld && (
                <p className="text-red-600 font-bold">
                    Vergangenes Event
                </p>
            )}
            <div className="flex flex-row gap-5">
                <button
                    onClick={handleDelete}
                    disabled={isPending}
                    className="mt-5 flex justify-center items-center rounded-4xl bg-blue-800 text-(--mainColor) w-57 h-10 px-7 py-4 font-['Kosmos']"
                >
                    Löschen
                </button>

                <EditEventButton event={{ id, title, location, date, isPublic }} />
            </div>
        </div>
    )
}