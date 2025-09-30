// pages/index.js
import Head from "next/head";
import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

const miniapp = {
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
      splashBackgroundColor: "#eeccff"
    }
  }
};

export default function Home() {
  useEffect(() => {
    try {
      if (sdk && sdk.actions && typeof sdk.actions.ready === "function") {
        sdk.actions.ready();
      }
    } catch (err) {
      console.error("sdk.actions.ready() error:", err);
    }
  }, []);

  const miniappJson = JSON.stringify(miniapp);

  return (
    <>
      <Head>
        <title>Flwy MiniApp</title>
        <meta name="description" content="Flwy MiniApp" />

        {/* OpenGraph for preview */}
        <meta property="og:title" content="Flwy MiniApp" />
        <meta property="og:description" content="Open Flwy" />
        <meta property="og:image" content={miniapp.imageUrl} />

        {/* fc:miniapp and fc:frame (use stringified JSON) */}
        <meta name="fc:miniapp" content={miniappJson} />
        <meta name="fc:frame" content={miniappJson} />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Flwy 🚀</h1>
        <p>This page should render a MiniApp with an Open button inside Farcaster.</p>
      </main>
    </>
  );
}