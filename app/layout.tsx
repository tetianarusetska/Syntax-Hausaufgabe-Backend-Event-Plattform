import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Event_Plattform",
  description: "Event_Plattform App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">

      <body>

        <header className="w-full bg-(--mainColor) px-8 py-4 shadow-md">
          <h1 className="text-center text-3xl font-['Kosmos'] text-(--bgColor)">
            Event_Plattform
          </h1>
        </header>

        <main>{children}</main>

      </body>
    </html>
  );
}