"use server"

import { prisma } from "@/prisma/prisma.client";
import { revalidatePath } from "next/cache";


export async function createEvent(formData: FormData) {

    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const date = formData.get("date") as string;
    const isPublic = formData.get("isPublic") === "on";

    if (!title || !location || !date) {
        throw new Error("Bitte alle Felder ausfüllen");
    }

    await prisma.event.create({
        data: {
            title,
            location,
            date: new Date(date),
            isPublic
        }
    });

    revalidatePath("/events");
    revalidatePath("/events/all");
}

export async function getPublicEvents() {
    return await prisma.event.findMany({
        where: {
            isPublic: true
        },
        orderBy: {
            date: "asc"
        }
    });
}

export async function getAllEvents() {
    return await prisma.event.findMany({
        orderBy: {
            date: "asc"
        }
    });
}