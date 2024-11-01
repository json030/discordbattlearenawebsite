import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <main className="flex-grow flex flex-row items-start justify-center px-8 py-10">
        {/* Linke Seite: Features */}
        <section className="flex flex-col w-1/2 pr-4">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <div className="space-y-4">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">📊 Ranglisten</h3>
              <p className="text-sm">Verfolge die besten Teilnehmer in Echtzeit und sieh, wie du im Vergleich zu anderen abschneidest.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">🏆 Punktesystem</h3>
              <p className="text-sm">Verdiene Punkte für jeden Sieg und verbessere deinen Platz in der Rangliste.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">⚔️ Live-Battles</h3>
              <p className="text-sm">Nimm an spannenden Battles gegen Gegner auf gleichem Niveau teil.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">📈 Statistiken und Analysen</h3>
              <p className="text-sm">Analysiere deine Leistungen und verbessere deine Skills.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold">🏅 Ligasystem</h3>
              <p className="text-sm">Werde automatisch in verschiedene Ligen eingestuft: Entry League, Advanced League und Heads League, basierend auf deiner Punktzahl.</p>
            </div>
          </div>
        </section>

        {/* Rechte Seite: So funktioniert es */}
        <section className="flex flex-col w-1/2 pl-4 text-lg">
          <h2 className="text-3xl font-semibold mb-4 text-center">So funktioniert es:</h2>
          <p>
            Nutze die Befehle im Discord-Server, um an Battles teilzunehmen und Punkte zu sammeln! 
            Mit dem <span className="font-bold">`/rangliste`</span>-Befehl kannst du jederzeit deine Platzierung einsehen.
          </p>
          <p className="mt-4">
            Du kannst mit <span className="font-bold">`/battle`</span> einfach einen anderen Rapper herausfordern, und er bekommt eine Direktnachricht, um dem Battle zuzustimmen oder abzulehnen. 
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
