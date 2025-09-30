// pages/index.js
import { useEffect } from "react";
import Head from "next/head";
import sdk from "@farcaster/frame-sdk";

const IMAGE_URL = "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg";
const APP_URL = "https://far-flwy.vercel.app";
const APP_NAME = "Flwy";

export default function Home() {
  useEffect(() => {
    try {
      if (sdk && sdk.actions && typeof sdk.actions.ready === "function") {
        sdk.actions.ready();
      }
    } catch (err) {
      // swallow; if error, it will show in Vercel logs
      // (no console spam in production)
      // eslint-disable-next-line no-console
      console.error("sdk.actions.ready error:", err);
    }
  }, []);

  const miniappEmbed = JSON.stringify({
    version: "1",
    image: IMAGE_URL,
    imageUrl: IMAGE_URL, // include both for compatibility
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_miniapp",
        name: APP_NAME,
        url: APP_URL,
        splashImageUrl: IMAGE_URL,
        splashBackgroundColor: "#eeccff"
      }
    }
  });

  const frameEmbed = JSON.stringify({
    version: "1",
    image: IMAGE_URL,
    imageUrl: IMAGE_URL,
    button: {
      title: "🚀 Open Flwy",
      action: {
        type: "launch_frame",
        name: APP_NAME,
        url: APP_URL,
        splashImageUrl: IMAGE_URL,
        splashBackgroundColor: "#eeccff"
      }
    }
  });

  return (
    <>
      <Head>
        <title>Flwy MiniApp</title>
        <meta name="description" content="Flwy MiniApp" />

        {/* Open Graph preview */}
        <meta property="og:title" content="Flwy MiniApp" />
        <meta property="og:description" content="Open Flwy MiniApp" />
        <meta property="og:image" content={IMAGE_URL} />

        {/* Farcaster miniapp/frame embeds — stringified JSON */}
        <meta name="fc:miniapp" content={miniappEmbed} />
        <meta name="fc:frame" content={frameEmbed} />
      </Head>

      <main style={{ textAlign: "center", padding: "48px" }}>
        <h1>Welcome to Flwy 🚀</h1>
        <p>This is the Flwy MiniApp test page.</p>
      </main>
    </>
  );
}