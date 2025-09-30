// pages/index.js
import { useEffect, useState } from "react";
import Head from "next/head";
import dynamic from "next/dynamic"; // این رو اضافه کن

const IMAGE_URL = "https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg";
const APP_URL = "https://far-flwy.vercel.app";
const APP_NAME = "Flwy";

// SDK رو dynamic import کن با ssr: false
const FrameSDK = dynamic(
  () => import("@farcaster/frame-sdk").then((mod) => ({ default: mod.default || mod })),
  { ssr: false }
);

export default function Home() {
  const [sdk, setSdk] = useState(null);

  useEffect(() => {
    const loadSDK = async () => {
      const loadedSdk = await FrameSDK();
      setSdk(loadedSdk);
      try {
        if (loadedSdk && loadedSdk.actions && typeof loadedSdk.actions.ready === "function") {
          loadedSdk.actions.ready();
        }
      } catch (err) {
        console.error("sdk.actions.ready error:", err);
      }
    };

    loadSDK();
  }, []);

  const miniappEmbed = JSON.stringify({
    version: "1",
    image: IMAGE_URL,
    imageUrl: IMAGE_URL,
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

        {/* Farcaster miniapp/frame embeds */}
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