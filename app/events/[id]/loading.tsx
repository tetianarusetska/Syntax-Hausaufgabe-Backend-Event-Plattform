import Spinner from "../../s_components/Spinner";

export default function Loading() {
  return (
    <>
    <p className="text-(--mainColor) font-['Fejoa'] text-2xl mx-10 my-5">Event wird geladen...</p>
    <Spinner />
    </>
  )
}