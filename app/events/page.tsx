import Link from "next/link";
import Navbar from "../cl_components/Navbar";

export default async function EvetsPage() {

    await new Promise((resolve) => {
        setTimeout(resolve, 4000);
    });

    return (
        <>
            <div className="min-h-screen w-full flex flex-col gap-10">
                <Navbar />


                <h1 className="text-5xl font-['BebasNeue'] mx-10">Events</h1>
                <div className="flex flex-row mx-10 gap-10">
                    <Link href="/events/1?mode=overview" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Übersicht</Link>
                    <Link href="/events/1?mode=details" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Details</Link>
                    <Link href="/events/2?mode=details" className="font-['Fejoa'] text-2xl font-bold underline">Event 1 – Details</Link>
                </div>


                <form className="flex flex-col gap-5 mx-10">

                    <h1 className="font-['Fejoa'] text-2xl font-bold underline">Form</h1>

                    <input name="title" placeholder="Titel" className="border border-(--mainColor) w-80 h-8 font-['Fejoa'] text-2xl" />
                    <input name="location" placeholder="Ort" className="border border-(--mainColor) w-80 h-8 font-['Fejoa'] text-2xl" />
                    <input name="date" type="date" className="border border-(--mainColor) w-80 h-8 font-['Fejoa'] text-2xl" />

                    <label className="flex flex-row gap-4 font-['Fejoa'] text-2xl">
                        <input type="checkbox" name="isPublic" className="w-6 h-6 " />
                        Öffentlich
                    </label>

                    <button
                        type="submit"
                        className="flex justify-center items-center rounded-4xl bg-blue-800 text-(--mainColor) w-57 h-10 px-7 py-4 font-['Kosmos']"
                    >
                        Event anlegen
                    </button>

                </form>

                <ul></ul>

            </div>
        </>
    )
}
