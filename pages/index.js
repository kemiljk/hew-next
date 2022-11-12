import Head from "next/head";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-20 max-w-5xl">
        <h1 className="pb-8 text-3xl font-bold uppercase">
          {"Hannah Elizabeth Washbourne"}
        </h1>
        <h2 className="font-serif text-7xl font-black">
          {
            "I'm a creative designer and illustrator working remotely in the UK."
          }
        </h2>
      </main>
    </div>
  );
}
