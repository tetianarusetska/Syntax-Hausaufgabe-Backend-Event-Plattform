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
            date: "31.12.2026",
            isPublic: true
        }
    })
    await prisma.event.create({
        data: {
            title: "Sommer End Party",
            location: "Frankfurt am Main",
            date: "31.08.2026",
            isPublic: true
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