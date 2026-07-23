import { prisma } from "./prisma.client";

// Prevent seed data in prod DB.
if (process.env.VERCEL_ENV === "production") {
    console.log("Auto-seed disabled for this environment.");
    process.exit(0);
}

async function seed() {
    const count = await prisma.event.count();

    if (count > 0) {
        console.log("Seed already applied. Skipping.");
        return;
    }

    await prisma.event.create({
        data: {
            title: "New Year Party 2027",
            location: "Berlin",
            date: new Date("2026-12-31"),
            isPublic: true
        }
    })

    await prisma.event.create({
        data: {
            title: "Sommer End Party",
            location: "Frankfurt am Main",
            date: new Date("2026-08-31"),
            isPublic: true
        }
    })

    await prisma.event.create({
        data: {
            title: "Party Disco",
            location: "Frankfurt am Main",
            date: new Date("2026-09-01"),
            isPublic: true
        }
    })

    await prisma.event.create({
        data: {
            title: "Techno Party",
            location: "Berlin",
            date: new Date("2026-08-20"),
            isPublic: false
        }
    })

    await prisma.event.create({
        data: {
            title: "Klassik Musik Party",
            location: "Bad Homburg",
            date: new Date("2026-09-11"),
            isPublic: true
        }
    })

    await prisma.event.create({
        data: {
            title: "Freunden Party",
            location: "Frankfurt am Main",
            date: new Date("2026-10-31"),
            isPublic: true
        }
    })

    await prisma.event.create({
        data: {
            title: "Halloween",
            location: "Berlin",
            date: new Date("2026-10-31"),
            isPublic: false
        }
    })
}

seed()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })