import React from 'react';
import Image from 'next/image';
import Head from 'next/head'; // Importiere Head für die Meta-Tags

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Discord Battle Arena</title> {/* Titel des Tabs */}
        <meta name="description" content="Tritt gegen andere in spannenden Battles an!" />
        <meta property="og:title" content="Discord Battle Arena" />
        <meta property="og:description" content="Tritt gegen andere in spannenden Battles an!" />
        <meta property="og:image" content="https://i.imgur.com/CClJjJa.png" />
        <meta property="og:url" content="https://discordbattlearena.vercel.app" /> {/* Hier deine Domain einfügen */}
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-900 text-white">
        <header className="flex items-center justify-between p-4">
          <Image 
            src="https://cdn.discordapp.com/attachments/1299033183798558743/1301580118787100772/ayMUl-u2SnG3Xqa8VKO5HQ.png" // Der Link zu deinem Logo
            alt="Discord Battle Arena Logo" 
            width={100} 
            height={100} 
            className="rounded-full" // Rundes Logo
          />
          <h1 className="text-5xl font-bold text-center flex-grow">Willkommen zur Discord Battle Arena!</h1>
        </header>

        <main className="flex-grow flex flex-col items-start justify-center px-8">
          <section className="mb-4">
            <h2 className="text-3xl font-semibold mb-2">Features</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Ranglisten</li>
              <li>Punktesystem</li>
              <li>Live-Battles</li>
              <li>Statistiken und Analysen</li>
            </ul>
          </section>

          <section className="mt-auto mb-4 text-lg text-left">
            <h2 className="text-2xl font-semibold">So funktioniert es:</h2>
            <p className="mt-2">
              Nutze die Befehle im Discord-Server, um an Battles teilzunehmen und Punkte zu sammeln!
            </p>
          </section>
        </main>

        <footer className="flex justify-between items-end px-8 py-4">
          <div className="text-lg">
            <h2 className="text-2xl font-semibold">Werde Teil der Community!</h2>
            <a href="https://discord.com/invite/X7EbcFr5" className="flex items-center">
              <Image 
                src="https://i.imgur.com/266S6uA.png" // Discord Logo
                alt="Discord Logo"
                width={75} // Größe des Discord-Logos
                height={75} 
                className="mr-2" // Abstand zum Text
              />
              Discord beitreten
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
