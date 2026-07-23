import { prisma } from "@/prisma/prisma.client";
import { type Event } from "../types/Event";


export async function createEvent({ title, location, date, isPublic }: { title: string, location: string, date: Date, isPublic: boolean }) {
    return await prisma.event.create({
        data: {
            title,
            location,
            date,
            isPublic,
        }
    });
}

export async function getPublicEvents(): Promise<Event[]> {
    return await prisma.event.findMany({
        where: {
            isPublic: true
        },
        orderBy: {
            date: "asc"
        }
    });
}

export async function getAllEvents(): Promise<Event[]> {
    return await prisma.event.findMany({
        orderBy: {
            date: "asc"
        }
    });
}

export async function deleteEvent(id: number) {

    await prisma.event.delete({
        where: { id }
    });

}

export async function deleteAllEvents() {

    await prisma.event.deleteMany();

}

export async function updateEvent({ id, title, location, date, isPublic }: { id: number, title: string, location: string, date: Date, isPublic: boolean }) {

    await prisma.event.update({
        where: { id },
        data: {
            title,
            location,
            date,
            isPublic
        }
    })
}

const eventService =  {
    create: createEvent,
    getPublicEvents,
    getAllEvents,
    delete: deleteEvent,
    deleteAllEvents,
    update: updateEvent
}

export default eventService