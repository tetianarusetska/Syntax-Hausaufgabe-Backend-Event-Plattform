"use client";

import { useState } from "react";
import EditEventForm from "../s_components/EditEventForm";
import { type Event } from "../../types/Event";

export default function EditEventButton({ event }: { event: Event }) {

    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="mt-5 flex justify-center items-center rounded-4xl bg-blue-800 text-(--mainColor) w-57 h-10 px-7 py-4 font-['Kosmos']"
            >
                Bearbeiten
            </button>

            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                    <div className="bg-white p-8 rounded-xl">
                        <button
                            className="text-(--bgColor)"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                        <EditEventForm event={event} />
                    </div>
                </div>
            )}
        </>
    );
}
