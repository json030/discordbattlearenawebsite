import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-700">
        <Image 
          src="https://i.imgur.com/CClJjJa.png" // Logo von Discord Battle Arena
          alt="Discord Battle Arena Logo" 
          width={100} 
          height={100} 
          className="rounded-full" // Rundes Logo
        />
        <h1 className="text-5xl font-bold text-center flex-grow">Willkommen zur Discord Battle Arena!</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-8 py-10">
        <section className="mb-4">
          <h2 className="text-4xl font-semibold mb-4">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold">📊 Ranglisten</h3>
              <p>Verfolge die besten Teilnehmer in Echtzeit und sieh, wie du im Vergleich zu anderen abschneidest.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold">🏆 Punktesystem</h3>
              <p>Verdiene Punkte für jeden Sieg und verbessere deinen Platz in der Rangliste.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold">⚔️ Live-Battles</h3>
              <p>Nimm an spannenden Battles gegen Gegner auf gleichem Niveau teil.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold">📈 Statistiken und Analysen</h3>
              <p>Analysiere deine Leistungen und verbessere deine Skills.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold">🏅 Ligasystem</h3>
              <p>Werde automatisch in verschiedene Ligen eingestuft: Entry, Advanced und Heads League, basierend auf deiner Punktzahl. Alle Battles und Fortschritte sind einfach über Discord verwaltbar!</p>
            </div>
          </div>
        </section>

        <section className="mt-auto mb-4 text-lg text-center">
          <h2 className="text-3xl font-semibold mb-2">So funktioniert es:</h2>
          <p className="mt-2">
            Nutze die Befehle im Discord-Server, um an Battles teilzunehmen und Punkte zu sammeln! 
            Mit dem <span className="font-bold">`/rangliste`</span>-Befehl kannst du jederzeit deine Platzierung einsehen.
          </p>
          <p className="mt-2">
            Du kannst mit <span className="font-bold">`/battle`</span> einfach einen anderen Rapper herausfordern und er bekommt eine Direktnachricht, um dem Battle zuzustimmen, oder es abzulehnen.
            Der Ablauf ist einfach: Battle gegen andere Rapper, erziele Siege und steige in der Rangliste auf!
          </p>
        </section>
      </main>

      <footer className="flex justify-between items-end px-8 py-4 bg-gray-800">
        <div className="text-lg">
          <h2 className="text-2xl font-semibold">Werde Teil der Community!</h2>
          <a href="https://discord.com/invite/X7EbcFr5" className="flex items-center">
            <Image 
              src="https://i.imgur.com/266S6uA.png" // Discord Logo
              alt="Discord Logo"
              width={112.5} // Größe des Discord-Logos (50% größer)
              height={112.5} 
              className="mr-2 cursor-pointer hover:scale-105 transition-transform duration-300" // Hover-Effekt
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
