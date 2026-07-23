import { deleteAllEvents } from "../actions";

export default function DeleteAllButton() {
    return (
        <form action={deleteAllEvents}>
            <button
                type="submit"
                className="mt-5 flex justify-center items-center rounded-4xl bg-blue-800 text-(--mainColor) w-77 h-10 px-7 py-4 font-['Kosmos']"
            >
                Alle löschen
            </button>
        </form>
    );
}