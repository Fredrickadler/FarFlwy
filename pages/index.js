import Head from "next/head";
import { useEffect } from "react";
import sdk from "@farcaster/frame-sdk";

export default function Home() {
  useEffect(() => {
    sdk.actions.ready();
  }, []);

  return (
    <>
      <Head>
        <title>Flwy MiniApp</title>
        <meta name="description" content="Flwy MiniApp" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Flwy MiniApp" />
        <meta property="og:description" content="Open Flwy MiniApp" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg"
        />

        {/* Farcaster MiniApp embed */}
        <meta
          name="fc:miniapp"
          content='{"version":"1","image":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","button":{"title":"🚀 Open Flwy","action":{"type":"launch_miniapp","name":"Flwy","url":"https://far-flwy.vercel.app","splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","splashBackgroundColor":"#eeccff"}}}'
        />

        {/* Backward compatibility (frame) */}
        <meta
          name="fc:frame"
          content='{"version":"1","image":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","button":{"title":"🚀 Open Flwy","action":{"type":"launch_frame","name":"Flwy","url":"https://far-flwy.vercel.app","splashImageUrl":"https://i.postimg.cc/FrqNxpv6/3011-B096-760-E-4-A33-BD0-C-3-B4-B89142-F99.jpg","splashBackgroundColor":"#eeccff"}}}'
        />
      </Head>

      <main style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Flwy 🚀</h1>
        <p>This is the Flwy MiniApp test page.</p>
      </main>
    </>
  );
}