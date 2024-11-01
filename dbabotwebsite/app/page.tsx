import React from 'react';
import Image from 'next/image';
import Head from 'next/head'; // Importiere Head

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Discord Battle Arena</title> {/* Titel der Seite */}
        <meta name="description" content="Tritt gegen andere in spannenden Battles an!" />
        <meta property="og:title" content="Discord Battle Arena" />
        <meta property="og:description" content="Tritt gegen andere in spannenden Battles an!" />
        <meta property="og:image" content="https://i.imgur.com/CClJjJa.png" /> {/* Link zum Logo */}
        <meta property="og:url" content="https://deine-domain.com" /> {/* Setze die richtige URL deiner Seite */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <header className="mb-10">
          <Image 
            src="https://i.imgur.com/CClJjJa.png" // Der Link zu deinem Logo
            alt="Discord Battle Arena Logo"
            width={150}
            height={150}
            className="rounded-full"
          />
          <h1 className="text-5xl font-bold mt-4">Willkommen zur Discord Battle Arena!</h1>
          <p className="text-xl mt-4">Tritt gegen andere in spannenden Battles an!</p>
        </header>

        <main className="flex flex-col items-start">
          <section className="mb-6">
            <h2 className="text-3xl font-semibold">Features</h2>
            <ul className="list-disc list-inside mt-4 text-lg">
              <li>Ranglisten</li>
              <li>Punktesystem</li>
              <li>Live-Battles</li>
              <li>Statistiken und Analysen</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-3xl font-semibold">So funktioniert es:</h2>
            <p className="mt-4 text-lg">
              Nutze die Befehle im Discord-Server, um an Battles teilzunehmen und Punkte zu sammeln!
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold">Werde Teil der Community!</h2>
            <p className="mt-4 text-lg">
              Trete unserem Discord-Server bei und kämpfe gegen andere Mitglieder!
              <br />
              <a href="https://discord.com/invite/X7EbcFr5" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                Klicke hier, um beizutreten!
              </a>
              <Image 
                src="https://i.imgur.com/266S6uA.png" 
                alt="Discord Logo" 
                width={75} 
                height={75} 
                className="inline-block ml-2"
              />
            </p>
          </section>
        </main>

        <footer className="mt-auto mb-4">
          <p>&copy; {new Date().getFullYear()} Discord Battle Arena. Alle Rechte vorbehalten.</p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
