"use server"

import { revalidatePath } from "next/cache";
import { type Event } from "../types/Event";
import eventService from "./service";


export async function createEvent(formData: FormData) {

    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const date = formData.get("date") as string;
    const isPublic = formData.get("isPublic") === "on";

    if (!title || !location || !date) {
        throw new Error("Bitte alle Felder ausfüllen");
    }

    await eventService.create({
        title,
        location,
        date: new Date(date),
        isPublic
    });

    revalidatePath("/events");
    revalidatePath("/events/all");
}


export async function getPublicEvents(): Promise<Event[]> {
    return await eventService.getPublicEvents();
}


export async function getAllEvents(): Promise<Event[]> {
    return await eventService.getAllEvents();
}



export async function deleteEvent(id: number) {

    await eventService.delete(id);

    revalidatePath("/events");
    revalidatePath("/events/all");
}


export async function deleteAllEvents() {

    await eventService.deleteAllEvents();

    revalidatePath("/events");
    revalidatePath("/events/all");
}


export async function updateEvent(formData: FormData) {

    const id = Number(formData.get("id"))
    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const date = formData.get("date") as string;
    const isPublic = formData.get("isPublic") === "on";

    if (!id) {
        throw new Error("Ungültige ID");
    }

    if (!title || !location || !date) {
        throw new Error("Bitte alle Felder ausfüllen");
    }

    await eventService.update({
            id,
            title,
            location,
            date: new Date(date),
            isPublic
    });

    revalidatePath("/events");
    revalidatePath("/events/all");
}