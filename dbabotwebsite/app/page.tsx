import React from 'react';
import Image from 'next/image'; // Importiere das Image-Component

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white p-6">
      <header className="flex items-start mb-10">
        <Image 
          src="https://i.imgur.com/CClJjJa.png" // Der Link zu deinem Discord-Logo
          alt="Discord Battle Arena Logo" // Alt-Text für das Bild
          width={150} // Setze die Breite des Bildes
          height={150} // Setze die Höhe des Bildes
          className="rounded-full mr-4" // Abstand nach rechts
        />
        <h1 className="text-4xl font-bold text-center flex-grow">Willkommen zur Discord Battle Arena!</h1>
      </header>

      <main className="flex flex-col w-full max-w-4xl mx-auto space-y-8">
        <section className="mb-4">
          <h2 className="text-2xl font-semibold text-left">Features</h2>
          <ul className="list-disc list-inside mt-2 ml-4 text-sm">
            <li>Ranglisten</li>
            <li>Punktesystem</li>
            <li>Live-Battles</li>
            <li>Statistiken und Analysen</li>
          </ul>
        </section>

        <section className="mb-4 text-center">
          <h2 className="text-2xl font-semibold">So funktioniert es:</h2>
          <p className="mt-2">
            Nutze die Befehle im Discord-Server, um an Battles teilzunehmen und Punkte zu sammeln!
          </p>
        </section>

        <section className="mt-auto text-right">
          <h2 className="text-2xl font-semibold">Werde Teil der Community!</h2>
          <Image 
            src="https://i.imgur.com/266S6uA.png" // Der Link zum Discord-Logo
            alt="Discord Logo" // Alt-Text für das Bild
            width={75} // 50% größere Breite
            height={75} // 50% größere Höhe
            className="inline-block mb-2" // Optional: Abstand nach unten
          />
          <p className="mt-2">
            <a 
              href="https://discord.com/invite/X7EbcFr5" 
              className="text-blue-400 underline" // Stil für den Link
              target="_blank"
              rel="noopener noreferrer"
            >
              Trete unserem Discord-Server bei!
            </a>
          </p>
        </section>
      </main>

      <footer className="mt-auto mb-4 text-center">
        <p>&copy; {new Date().getFullYear()} Discord Battle Arena. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
};

export default HomePage;
