import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Flwy Frame</title>
        <meta name="description" content="Testing Farcaster Frame" />

        {/* OpenGraph tags */}
        <meta property="og:title" content="Flwy Frame" />
        <meta property="og:description" content="Testing Farcaster Frame" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg"
        />

        {/* Farcaster Frame tags */}
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg"
        />
        <meta property="fc:frame:button:1" content="Open Flwy" />
        <meta property="fc:frame:button:1:action" content="link" />
        <meta property="fc:frame:button:1:target" content="https://far-flwy.vercel.app" />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Hello Farcaster 🚀</h1>
        <p>Your Flwy frame is live!</p>
      </main>
    </>
  );
}