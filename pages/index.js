import Head from "next/head";
import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  const miniappEmbed = JSON.stringify({
    version: "1",
    imageUrl:
      "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_miniapp",
        name: "Flwy",
        url: "https://far-flwy.vercel.app",
        splashImageUrl:
          "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
        splashBackgroundColor: "#eeccff",
      },
    },
  });

  const frameEmbed = JSON.stringify({
    version: "1",
    imageUrl:
      "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_frame",
        name: "Flwy",
        url: "https://far-flwy.vercel.app",
        splashImageUrl:
          "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg",
        splashBackgroundColor: "#eeccff",
      },
    },
  });

  return (
    <>
      <Head>
        <title>Flwy MiniApp</title>
        <meta name="description" content="Flwy MiniApp test" />

        {/* Farcaster embeds */}
        <meta name="fc:miniapp" content={miniappEmbed} />
        <meta name="fc:frame" content={frameEmbed} />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>🚀 Flwy MiniApp</h1>
        <p>This page is now embeddable in Farcaster.</p>
      </main>
    </>
  );
}